'use strict';

function fibNaive(n) {
  return n < 2 ? n : fibNaive(n - 1) + fibNaive(n - 2);
}

let memo = {
  0: 0,
  1: 1,
};

function fibMemoized(n) {
  return n in memo ? memo[n] : memo[n] = memo[n - 1] + memo[n - 2];
}

function fibIterative(n) {
  if (n < 2) {
    return n;
  }
  let back1 = 1;
  let back2 = 0;
  for (let i = 2; i < n; ++i) {
    back1 = back1 + back2;
    back2 = back1 - back2;
  }
  return back1 + back2;
}


// TEST
for (let i = 0; i < 20; ++i) {
  console.log(fibNaive(i));
}

for (let i = 0; i < 20; ++i) {
  console.log(fibMemoized(i));
}

for (let i = 0; i < 20; ++i) {
  console.log(fibIterative(i));
}
