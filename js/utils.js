'use strict'


function renderBoard(board) {

    var strHTML = '<table><tbody>';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            // var cell = mat[i][j];
            // var className = 'cell cell' + i + '-' + j;
            strHTML += `<td>${board[i][j]}</td>`
        }
        strHTML += '</tr>'
    }
    // strHTML += '</tbody></table>';
    var elBoard = document.querySelector('.board');
    elBoard.innerHTML = strHTML;
}


function setMinesNegsCount(cellI, cellJ, mat) {

    var minesAroundCount = 0;

    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= mat[i].length) continue;

            var currCell = mat[i][j]
            if (currCell === MINE)
            
            minesAroundCount++
            
        }
    }

    console.log('num of mines around:', minesAroundCount)
    return minesAroundCount;
}















// location such as: {i: 2, j: 7}
function renderCell(location, value) {
    // Select the elCell and set the value
    var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
    elCell.innerHTML = value;
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}


function getRandomIntExclusive(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
}


function getEmptyCells(mat) {

    var emptyCells = [];

    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === EMPTY) {
                emptyCells.push({ i: i, j: j });
            }
        }
    }
    return emptyCells;

}

