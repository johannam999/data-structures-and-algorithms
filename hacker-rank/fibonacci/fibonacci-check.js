'use strict';

function fibonacci(arr) {
  let flag = true;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] + arr[i + 1] !== arr[i + 2]) {
      flag = false;
    } 
  }
  return flag;
}

fibonacci();
