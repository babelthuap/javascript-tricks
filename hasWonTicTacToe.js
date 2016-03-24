'use strict';

const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
                       [0, 3, 6], [1, 4, 7], [2, 5, 8],
                       [0, 4, 8], [2, 4, 6]];

// 'positions' is an array of the controlled board squares, numbered as:
// 0 1 2
// 3 4 5
// 6 7 8
function isWinning(positions) {
  return winningCombos.some(combo => {
    return combo.every(position => positions.indexOf(position) !== -1);
  });
}

// TEST
console.log(isWinning([7, 1, 5, 0])); // -> false
console.log(isWinning([4, 0, 5, 8])); // -> true
