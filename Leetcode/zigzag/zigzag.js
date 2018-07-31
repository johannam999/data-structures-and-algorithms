'use strict';

function zigzag(s, numRows) {
  let count = 0;
  let direction = true;
  let row = 0; 
  let col = 0;
  const map = [];
  for (let i = 0; i < numRows; i++) {
    map[i] = [];
  }
  for (let i = 0; i < s.length; i++) {
    if (direction) {
      map[row][col] = s[i];
      row += 1;
      count += 1;
    } else {
      map[row][col] = s[i];
      row -= 1;
      col += 1;           
      count += 1;
    }
    if (direction && count === numRows) {
      count = 0;
      row -= 2;
      col += 1; 
      direction = false;
    }
    if (!direction && count === numRows - 2) {
      count = 0;
      direction = true;
    }
  }
  let res = '';
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j]) {
        res += map[i][j];
      }
    }
  }
      
  return res;
}
zigzag('PAYPALISHIRING', 3);
