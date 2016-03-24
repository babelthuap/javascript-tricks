'use strict';

const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
                       [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
                       [0, 4, 8], [2, 4, 6]];           // diagonals

// check for a win given an array of a player's controlled positions
// 'positions' is an array of the controlled board squares, numbered as:
// 0 1 2
// 3 4 5
// 6 7 8
function isWinning(positions) {
  return winningCombos.some(combo => {
    return combo.every(position => positions.indexOf(position) !== -1);
  });
}

// now suppose the board is given as an NxN matrix of ''s, 'X's, and 'O's
// return 'X' or 'O' if 'X' or 'O' has won, otherwise return null
function whoWins(board) {
  let N = board.length;
  let candidate;

  // check rows
  for (let row = 0; row < N; ++row) {
    candidate = board[row][0];
    if (candidate && board[row].every(position => position === candidate)) {
      return candidate;
    }
  }

  // check columns
  for (let col = 0; col < N; ++col) {
    candidate = board[0][col];
    if (candidate && board.every(row => row[col] === candidate)) {
      return candidate;
    }
  }

  // check main diagonal
  candidate = board[0][0];
  if (candidate && board.every((row, i) => row[i] === candidate)) {
    return candidate;
  }

  // check cross diagonal
  candidate = board[0][N - 1];
  if (candidate && board.every((row, i) => row[N - 1 - i] === candidate)) {
    return candidate;
  }

  return null;
}

// TEST
console.log(isWinning([7, 1, 5, 0])); // -> false
console.log(isWinning([4, 0, 5, 8])); // -> true

let board = [['', 'X', '', 'O'],
             ['', 'X', 'O', 'X'],
             ['X', 'O', 'X', 'O'],
             ['O', 'X', 'O', 'X']];
console.log('who wins?', whoWins(board));
