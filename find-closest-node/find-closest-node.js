'use strict';


const findClosestNode = (tree, target) => {
  if (!tree.root) { 
    return undefined; 
  }
  let closestSoFar = tree.root;
  let currentNode = tree.root;
  while (currentNode !== null) {
    if (currentNode.value === target) {
      return currentNode;
    }
    const currentDifference = Math.abs(target - currentNode.value);
    const closestSoFarDifference = Math.abs(target - closestSoFar.value);

    if (currentDifference <= closestSoFarDifference) {
      closestSoFar = currentNode;
    }
    if (target < closestSoFar.value) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return closestSoFar;
};

// export default findClosestNode;
