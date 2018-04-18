'use strict';

function doBinarySearch(array, key) {
  for (let i = 0; i < array.length; i++) {
    if (key === array[i]) {
      return i;
    }
  }
  return -1;
}
exports.doBinarySearch = doBinarySearch;

