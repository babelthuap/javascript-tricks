'use strict';

// sort an array of strings so that all anagrams are next to each other
function gatherAnagrams(arr) {
  let anagramBuckets = {};

  arr.forEach(word => {
    let sortedChars = word.split('').sort().join('');
    if (anagramBuckets.hasOwnProperty(sortedChars)) {
      anagramBuckets[sortedChars].push(word);
    } else {
      anagramBuckets[sortedChars] = [word];
    }
  });

  return Object.keys(anagramBuckets).reduce((final, key) => {
    return final.concat(anagramBuckets[key]);
  }, []);
}

console.log(gatherAnagrams(['hi', 'you', 'ih', 'him', 'ouy']));
