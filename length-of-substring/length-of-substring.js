'use strict';

function lengthOfLongestSubstring(s) {
  const letters = s.split('');
  let countLength = 0;
  const map = new Map();
  for (let i = 0; i < letters.length; i++) {
    if (!map.has(letters[i])) {
      map.set(letters[i], i);
    } else {
      i = map.get(letters[i]);
      map.clear();
    }     
    if (map.size > countLength) {
      countLength = map.size;
    }
  }
  return countLength;
}

lengthOfLongestSubstring();
