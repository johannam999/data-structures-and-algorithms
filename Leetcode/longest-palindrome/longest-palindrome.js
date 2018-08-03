'use strict';

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
function longestPalindrome(s) {
  for (let j = s.length; j > 1; j--) {
    for (let i = 0; i <= s.length - j; i++) {
      const substring = s.slice(i, i + j);
      if (isPalindrome(substring)) {
        return substring; 
      }
    }
  }
  return false;
}

longestPalindrome();
