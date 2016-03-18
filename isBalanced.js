'use strict';

// function isBalanced(str) {
//   str = str.replace(/[^()\[\]{}]/g, '');
//   var length;
//   while (length !== str.length) {
//     length = str.length;
//     str = str.replace(/\[\]|\(\)|\{\}/g, '');
//   }
//   return str.length === 0;
// }

// super-compressed form:
function isBalanced(str) {
  let pairs = /\[\]|\(\)|\{\}/g;
  let rmPairs = s => pairs.test(s) ? rmPairs(s.replace(pairs, '')) : s;
  return rmPairs(str.replace(/[^()\[\]{}]/g, '')).length === 0;
}

console.assert(isBalanced("{aaaa}[](oo)") === true);
console.assert(isBalanced("{[()]}[{77}]()") === true);
console.assert(isBalanced("{[red]]}[wo](w)") === false);
console.assert(isBalanced("{][(blue)]") === false);
console.log('ALL TEST CASES PASSED');
