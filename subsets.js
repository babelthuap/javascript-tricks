'use strict';

// generate the set of all subsets of the input set
function powerset(set) {
  let arr = [...set];

  var subsets = new Set();
  var padding = '0'.repeat(arr.length - 1);

  for (var i = 0; i < (1 << arr.length); i++) {
    var binary = (padding + i.toString(2)).slice(-arr.length).split('');
    var subset = new Set();
    binary.forEach((x, i) => x === '1' && subset.add(arr[i]));
    subsets.add(subset);
  }

  return subsets;
}

let set = new Set([0, 1, 2, 3]);
console.log(powerset(set));
