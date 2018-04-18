'use strict';

function insertShiftArray(array, newValue) {
  const newArr = [];
  const indexMiddle = Math.ceil(array.length / 2);


  for (let i = 0; i < array.length + 1; i++) {
    if (i < indexMiddle) {
      newArr[i] = array[i];
    } else if (i === indexMiddle) {
      newArr[i] = newValue;
    } else {
      newArr[i] = array[i - 1];
    }
  }
  return newArr;
}

exports.insertShiftArray = insertShiftArray;
