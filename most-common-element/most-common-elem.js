'use strict';

function mostCommonElem(array) {
  const map = {};
  let maxVal = 0;
  let commonElement = array[0];
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (!map[num]) {  
      map[num] = 1;
    } else {
      map[num] += 1;
    }
    if (map[num] > maxVal) {
      maxVal = map[num];
      commonElement = array[i];
    }   
  }
  return commonElement;
}

mostCommonElem();
