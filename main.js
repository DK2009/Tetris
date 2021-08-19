var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
var nextPieceCanvas = document.getElementById('next-piece')
var nextContext = nextPieceCanvas.getContext('2d')

var p = GET_RAND_PIECE()
var pIndex = 0
var currPiece = p[0][pIndex]
var pieceColor = p[1]
var player = {
    x: 3,
    y: 0
}
var scoreElement = document.querySelector('#score span')
var score = 0
var gameOver = false

function drawSquare(x, y, color) {
    context.fillStyle = color
    context.fillRect(x * SQ, y * SQ, SQ, SQ)
    
    context.strokeStyle = '#fff'
    context.strokeRect(x * SQ, y * SQ, SQ, SQ)
}

var board = []
for(let r = 0; r < ROW; r++) {
    board[r] = []
    for(let c = 0; c < COL; c++) {
        board[r][c] = VACANT
    }
}

function drawBoard() {
    board.forEach((row, y) => {
        row.forEach((value, x) => {
            drawSquare(x, y, value)
        })
    })
}

function fill(x, y, piece) {
    let matrix = piece[0]
    let color = piece[1]
    matrix.forEach((row, i) => {
        row.forEach((value, j) => {
            if(value !== 0) {
                drawSquare(x + j, y + i, color)
            }
        })
    })
}


function draw() {
    drawBoard()
    fill(player.x, player.y, [ currPiece, pieceColor ])
}

function collide(x, y, piece) {
    var result = false
    piece.forEach((row, i) => {
        row.forEach((value, j) => {
            if(value !== 0) {
                newY = player.y + i + y
                newX = player.x + j + x

                if(newX < 0 || newX >= COL || newY >= ROW - 2) {
                    result = true
                }
                if(board[newY][newX] !== VACANT) result = true
            }
        })
    })
    return result
    
}

function lock(piece, color) {
    piece.forEach((row, i) => {
        row.forEach((value, j) => {
            if(value !== 0) {
                if(player.y <= 2) {
                    gameOver = true          
                } else {
                    board[player.y + i][player.x + j] = color
                }
            }
        })
    })
    for(let r = 0; r < board.length; r++) {
        let full = true
        for(let c = 0; c < COL; c++) {
            full = full && (board[r][c] !== VACANT)
        }
        if(full) {
            for(let y = r; y > 1; y--) {
                for(let c = 0; c < COL; c++) {
                    board[y][c] = board[y - 1][c]
                }
            }
            for(let c = 0; c < COL; c++) {
                board[0][c] = VACANT
            }
            score += 10
        }
    }
}

function moveDown() {
    if(!collide(0, 1, currPiece)) player.y++
    else {
        lock(currPiece, pieceColor)
        player.y = 0
        player.x = 3
        p = nextP
        pIndex = 0
        currPiece = p[0][pIndex]
        pieceColor = p[1]
        nextP = GET_RAND_PIECE()
    }
}

function moveLeft() {
    if(!collide(-1, 0, currPiece)) player.x--
}

function moveRight() {
    if(!collide(1, 0, currPiece)) player.x++
}

function rotate() {
    let nextPiece = p[0][(pIndex + 1) % p[0].length]
    if(collide(-1, 0, nextPiece) && collide(1, 0, nextPiece)) return
    while(collide(0, 0, nextPiece)) {
        if(player.x < COL / 2) {
            player.x++
        } else {
            player.x--
        }
    }
    pIndex = (pIndex + 1) % p[0].length
    currPiece = p[0][pIndex]
    pieceColor = p[1]
}

function drawNextPiece() {
    let matrix = nextP[0][0]
    let color = nextP[1]

    nextContext.fillStyle = '#000'
    nextContext.fillRect(0, 0, nextPieceCanvas.clientWidth, nextPieceCanvas.clientHeight)
    nextContext.fillStyle = color
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value) {
                nextContext.fillRect(x * SQ, y * SQ, SQ, SQ)
            }
        })
    })
}

var lastTime = 0
var counter = 0
var interval = 800
var nextP = GET_RAND_PIECE()
function update(time = 0) {
    if(!gameOver) {
        var delta = time - lastTime
        lastTime = time
        counter += delta

        if(counter > interval) {
            moveDown()
            counter = 0
        }

        draw()
        scoreElement.innerText = score
        
        drawNextPiece()

        requestAnimationFrame(update)
    } else {
        alert('You Lose!')
        for(let r = 0; r < ROW; r++) {
            board[r] = []
            for(let c = 0; c < COL; c++) {
                board[r][c] = VACANT
            }
        }
        drawBoard()
        gameOver = false
        score = 0
        requestAnimationFrame(update)
    }
}

document.addEventListener('keydown', (e) => {
    switch(e.keyCode) {
        case 37:
            moveLeft()
            break;
        case 38:
            rotate()
            break
        case 39:
            moveRight()
            break;            
        case 40:
            moveDown()
            break;
    }
})

update()