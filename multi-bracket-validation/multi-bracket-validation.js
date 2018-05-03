function findBraces(string) {
  const tempArr = [];
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '{' || string[i] === '[') {
      tempArr.push(string[i]);
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (tempArr[0] === '(' && string[i] === ')') {
      tempArr.shift(tempArr[i]);
    }
    if (tempArr[0] === '{' && string[i] === '}') {
      tempArr.shift(tempArr[i]);
    }
    if (tempArr[0] === '[' && string[i] === ']') {
      tempArr.shift(tempArr[i]);
    }
  }
  if (tempArr === null) {
    return true;
  }
  return false;
}

console.log(findBraces('[{}]'));
