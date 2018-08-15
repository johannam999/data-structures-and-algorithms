'use strict';

function beautifulTriplets(d, arr) {
  const sorted = arr.sort((a, b) => { return a - b; });
  const n = sorted.length;
  let count = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if ((arr[j] - arr[i] === d) && (arr[k] - arr[j] === d)) {
          count += 1;     
        }
      } 
    }
  }
  return count;
}

beautifulTriplets();
