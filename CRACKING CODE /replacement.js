'use strict';

function replaceSpaces(longString) { 
  const newStr = longString.replace(/ /g, '%20');  
  return newStr;
}
console.log(replaceSpaces('my name is jo'));
