'use strict';

function compressor(str) {
  return str.replace(/(.)\1*/g, function(match) {
    return match[0] + (match.length > 1 ? match.length : '');
  });
}

var testStr = 'abaabbaaabbb';
console.log(testStr + ' -> ' + compressor(testStr));
