'use strict';

// rotate an NxN matrix 90 degrees clockwise
function rotate(mat) {
  let N = mat.length;
  let rotated = Array(N);
  for (let i = 0; i < N; ++i) {
    rotated[i] = [];
    for (let j = 0; j < N; ++j) {
      rotated[i].push( mat[N - (j + 1)][i] );
    }
  }
  return rotated;
}

// can you do this in place?

// TEST
let rot = rotate([[0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8]]);
console.log(rot[0]); // -> [6, 3, 0]
console.log(rot[1]); // -> [7, 4, 1]
console.log(rot[2]); // -> [8, 5, 2]
