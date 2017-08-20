'use strict';

function test(str, re) {
  let r = 0;
  let i = 0;

  while (i < str.length) {
    if (re[r + 1] === '*') {
      let repeatedChar = re[r];
      r += 2;
      while (str[i] === repeatedChar) {
        ++i;
      }
    } else {
      if (str[i] !== re[r]) {
        return false;
      }
      ++i;
      ++r;
    }
  }

  return r === re.length;
}

console.assert(test( 'abc', 'abc' ) === true);
console.assert(test( 'abc', 'abcdef' ) === false);
console.assert(test( 'abc', 'a' ) === false);

console.assert(test( 'aab', 'a*b' ) === true);
console.assert(test( 'b', 'a*b' ) === true);
console.assert(test( 'azb', 'a*b' ) === false);

console.log(test( '*', '*' ));
