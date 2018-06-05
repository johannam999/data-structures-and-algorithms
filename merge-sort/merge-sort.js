'use strict';


const sortingArray = (left, right) => {
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  while (left.length) {
    sortedArray.push(left.shift());
  }
  while (right.length) {
    sortedArray.push(right.shift());
  }
  return sortedArray;
};

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const mid = parseInt(array.length / 2); // eslint-disable-line
  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);

  return sortingArray(mergeSort(left), mergeSort(right));
};
export default mergeSort;

