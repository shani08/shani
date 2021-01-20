'use strict'

const MINE = '*'
const FLAG = '^'


var gBoard = {
    minesAroundCount: 4,
    isShown: true,
    isMine: false,
    isMarked: true,

};

var gLevel = {
    SIZE: 4,
    MINES: 2,
};

var gMine;

function createMine() {
    gMine = {
        location: {
            i: 1,
            j: 1
        },
        isMine: true
    }

    gBoard[gMine.location.i][gMine.location.j] = MINE
}


function init() {

    var gGame = {
        isOn: false,
        shownCount: 0,
        markedCount: 0,
        secsPassed: 0,
    };
    console.log('hello')
    gBoard = buildBoard()
    renderBoard(gBoard, '.board-container')
    createMine(gBoard)
    // gGame.isOn = true

}

function buildBoard() {

    var board = [];
    for (var i = 0; i < 4; i++) {
        board.push([]);
        for (var j = 0; j < 4; j++) {
            board[i][j] = { gBoard }
        }
    }


    // board[1][1] = MINE
    // board[2][2] = MINE

    console.log(board)
    return board;
}

function cellClicked(elCell, i, j) {
    if (gBoard[i][j] !== MINE) {


    }

}

