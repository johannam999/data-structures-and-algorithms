'use strict';

function plusMinus(arr) {
  let plus = 0;
  let zero = 0;
  let minus = 0;
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      plus += 1;
    }
    if (arr[i] === 0) {
      zero += 1;   
    }
    if (arr[i] < 0) {
      minus += 1;
    }
  }
  const totMin = minus / n;
  const totPl = plus / n;
  const totZ = zero / n;
  const newArr = [totPl, totMin, totZ];
    
  return newArr;
}

console.log(plusMinus([-1, 2, -5, 0, -4, 6]));
