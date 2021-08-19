
const T = [
    [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0],
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 0, 1],
    ],
    [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
    ],
    [
        [1, 0, 0],
        [1, 1, 0],
        [1, 0, 0],
    ],
]

const Z = [
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
    ],
    [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1],
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0],
    ],
]

const S = [
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1],
    ],
    [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0],
    ],
    [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0],
    ],
]

const I = [
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
    ],
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
    ],
]

const O = [
    [
        [1, 1],
        [1, 1],
    ]
]

const L = [
    [
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 0],
    ],
    [
        [1, 1, 1],
        [1, 0, 0],
        [0, 0, 0],
    ],
    [
        [0, 1, 1],
        [0, 0, 1],
        [0, 0, 1],
    ],
    [
        [0, 0, 0],
        [0, 0, 1],
        [1, 1, 1],
    ],
]

const J = [
    [
        [0, 0, 1],
        [0, 0, 1],
        [0, 1, 1],
    ],
    [
        [0, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
    ],
    [
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0],
    ],
    [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 0],
    ],
]

const V = [
    [
        [1, 0],
        [1, 1],
    ],
    [
        [1, 1],
        [1, 0],
    ],
    [
        [1, 1],
        [0, 1],
    ],
    [
        [0, 1],
        [1, 1],
    ],
]

const PIECES = [
    [Z, 'tomato'],
    [S, 'limegreen'],
    [T, 'violet'],
    [I, 'deepskyblue'],
    [O, 'yellow'],
    [L, 'sandybrown'],
    [J, 'royalblue'],
    [V, 'darkorchid'],
]

const GET_RAND_PIECE = function() {
    let r = Math.floor(Math.random() * PIECES.length)
    return [
        PIECES[r][0],
        PIECES[r][1],
    ]
}