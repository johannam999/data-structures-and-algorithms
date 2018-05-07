
'use strict';

function multiBracketValidation(braces) {
  const tempArr = [];
  
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === '(' || braces[i] === '{' || braces[i] === '[') {
      tempArr.push(braces[i]);
    }

    if (braces[i] === ')') {
      if (tempArr[tempArr.length - 1] === '(') {
        tempArr.pop();
      } else {
        return false;
      }
    }
    if (braces[i] === '}') {
      if (tempArr[tempArr.length - 1] === '{') {
        tempArr.pop();
      } else {
        return false;
      }
    }
    if (braces[i] === ']') {
      if (tempArr[tempArr.length - 1] === '[') {
        tempArr.pop();
      } else {
        return false;
      }
    }
  }
  if (tempArr.length === 0) {
    return true;
  } 
  return false;
}

module.exports = multiBracketValidation;
