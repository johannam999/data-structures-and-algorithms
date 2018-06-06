'use strict';

function quickSort(array) {
  if (array.length <= 1) { 
    return array; 
  } 
  const leftArray = [];
  const rightArray = [];
  const pivot = array.pop();
  const sortedArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);  
    } 
  }
  const leftSort = quickSort(leftArray);
  const rightSort = quickSort(rightArray);

  return sortedArray.concat(leftSort, pivot, rightSort);
}


export default quickSort;

