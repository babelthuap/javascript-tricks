'use strict';

const fs = require('fs');

function collatz(x) {
  return x % 2 ? 3 * x + 1 : x / 2;
}

function *hailstone(n) {
  yield n;
  while (n !== 1) {
    yield n = collatz(n);
  }
}

let lengthMemo = {1: 1};

function hailLength(n) {
  if (n in lengthMemo) {
    return lengthMemo[n];
  } else {
    return lengthMemo[n] = 1 + hailLength(collatz(n));
  }
}

function generateLengths(N) {
  let start = Date.now();
  
  let lengths = 'n\tlength\n';
  let max = -Infinity;
  for (let i = 1; i <= N; i++) {
    let len = hailLength(i);
    if (len > max) {
      max = len
      lengths += `${i}\t${len}\n`;
    }
  }

  fs.writeFileSync('hailLengths.txt', lengths);
  console.log((Date.now() - start) / 1000 + ' s');
}

generateLengths(1 << 20);
console.log([...hailstone(230631)].join(', '));
