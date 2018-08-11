'use strict';

function kaprekarNumbers(p, q) {
  const arr = [];
  
  for (let i = p; i <= q; i++) {
    if (p > q || q >= 100000 || p <= 0) {
      return 'INVALID RANGE';
    }
    const sq = i * i;
    const square = sq.toString();
    const sqLen = square.length / 2;
    const leftVal = Number(square.substring(0, sqLen));
    const rightVal = Number(square.substring(sqLen));
    const newSum = leftVal + rightVal;
    
    if ((newSum === i) && (square.length > 1)) {
      arr.push(i);
    }
    if (sq === 1) {
      arr.push(i);
    }
  } 
  if (arr.length > 0) {
    console.log(arr.join(' '));
  } else {
    console.log('INVALID RANGE');
  } 
  return arr.join(' ');
}

kaprekarNumbers();
