'use strict';

function *hailstone(x) {
  while (x !== 1) {
    yield x;
    x = x % 2 ? 3 * x + 1 : x / 2;
  }
  yield x;
}

function printSequences(N) {
  for (let i = 1; i <= N; ++i) {
    let seq = [...hailstone(i)];
    console.log(`${seq.join(', ')}\n> ${seq.length} <\n`);
  }
}

function *hailLengths(N) {
  let n = 1;
  while (n <= N) {
    let seq = [...hailstone(n++)];
    yield seq.length;
  }
}

function printBarGraph(N) {
  let lengths = [...hailLengths(N)];
  let max = lengths.reduce((max, x) => Math.max(max, x), -Infinity);
  let stars = lengths.map(len => '*'.repeat(Math.ceil(len * 80 / max)));
  console.log(stars.join('\n'));
}

var lengthMemo = {};

function *superHailstone(x) {
  let thisRun = new Set();
  while (!thisRun.has(x)) {
    yield x;
    thisRun.add(x);
    x = x in lengthMemo ? lengthMemo[x] : lengthMemo[x] = [...hailstone(x)].length;
  }
  yield x;
}

for (let i = 1; i <= 1000; ++i) {
  console.log([...superHailstone(i)]);
}













