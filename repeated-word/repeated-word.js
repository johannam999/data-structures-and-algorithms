'use strict';

function repeatedWord(str) {
  const array = str.toLowerCase().match(/\w+/g);
  const map = {};
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else if (map[array[i]]) {
      map[array[i]] += 1;
      return array[i];  
    } 
  }
  return undefined;
}

export default repeatedWord;

