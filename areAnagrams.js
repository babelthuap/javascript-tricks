'use strict';

// using pre-allocatd array
function areAnagramsArray(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let counts = Array(256).fill(0);
  for (let i = 0; i < a.length; ++i) {
    ++counts[a.charCodeAt(i)];
    --counts[b.charCodeAt(i)];
  }
  return counts.every(count => count === 0);
}

// using JavaScript object
function areAnagramsObject(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let counts = {};
  for (let i = 0; i < a.length; ++i) {
    counts[a[i]] = counts[a[i]] ? counts[a[i]] + 1 : 1; 
    counts[b[i]] = counts[b[i]] ? counts[b[i]] - 1 : -1; 
  }
  return Object.keys(counts).every(key => counts[key] === 0);
}

// TESTS
console.assert(areAnagramsArray('algorithm', 'logarithm') === true);
console.assert(areAnagramsArray('yesm', 'easy') === false);
console.assert(areAnagramsObject('algorithm', 'logarithm') === true);
console.assert(areAnagramsObject('yesm', 'easy') === false);
console.log('ALL TESTS PASSED');
