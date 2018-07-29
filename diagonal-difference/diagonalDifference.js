function diagonalDifference(arr) {
  let sumL = 0;
  let sumR = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    sumL += arr[i][i];   
    sumR += arr[i][(len - 1) - i];
  }
  return Math.abs(sumL - sumR);    
}
diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 10]]);
