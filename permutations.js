'use strict';

function allPermutations(arr) {
  if (arr.length === 1) return [arr]; // base case

  var perms = [];

  for (var i = 0; i < arr.length; i++) {
    var firstElement = arr[i];
    var permsOnElem = [];
    var remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    allPermutations(remaining).forEach(function(perm) {
      permsOnElem.push( [firstElement].concat(perm) );
    });
    perms = perms.concat(permsOnElem);
  }

  return perms;
}

console.log(allPermutations([1,2,3,4]));
