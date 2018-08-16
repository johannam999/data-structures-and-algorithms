'use strict';

function birthdayCakeCandles(ar) {
  const maxHeight = Math.max(...ar);
  const candlesCount = ar.filter(candle => candle === maxHeight); 
  return candlesCount.length;
}
// SOLUTION 2

function birthdayCakeCandle(ar) {
  let currentMax = 0;
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > currentMax) {
      currentMax = ar[i];  
    } 
  }
  for (let j = 0; j < ar.length; j++) {
    if (ar[j] === currentMax) {
      count += 1;
    }  
  } 
  return count;
}

// SOLUTION 3

function birthdayCakesCandles(ar) {
  const maxHeight = Math.max(...ar);
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === maxHeight) {
      count++;  
    }
  }
  return count;
}
birthdayCakeCandle([1, 2, 3, 4, 5, 5, 7]);
birthdayCakeCandles([1, 2, 3, 4, 5, 5, 7]);
birthdayCakesCandles([1, 2, 3, 4, 5, 5, 7]);
