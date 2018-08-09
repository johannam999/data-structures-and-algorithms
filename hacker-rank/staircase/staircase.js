'use strict';

const staircase = (n) => {
  const arr = Array(n).fill(' ');

  for (let i = n - 1; i >= 0; i--) {
    arr[i] = '#';
    return arr.join('');
  }
  return arr;
};

console.log(staircase(6));
