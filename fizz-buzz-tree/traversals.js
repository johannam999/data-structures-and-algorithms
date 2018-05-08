'use strict';


const fizzBuzzTree = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }
  if (rootNode.value % 3 === 0 && rootNode.value % 5 === 0) {
    rootNode.value = 'fizz-buzz';
  } 
  if (rootNode.value % 3 === 0) {
    rootNode.value = 'fizz';
  }
  if (rootNode.value % 5 === 0) {
    rootNode.value = 'buzz';
  }
  
  fizzBuzzTree(rootNode.left);
  fizzBuzzTree(rootNode.right);
  return undefined;
};
fizzBuzzTree();

export default fizzBuzzTree; 
