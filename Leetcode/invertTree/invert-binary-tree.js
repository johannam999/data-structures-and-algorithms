'use strict';


const revert = (rootNode) => {
  if (!rootNode) {
    return undefined; 
  }
  const temp = rootNode.left;
  rootNode.left = rootNode.right;
  rootNode.right = temp;
  
  if (rootNode.left) {
    revert(rootNode.left);
  }
  if (rootNode.right) {
    revert(rootNode.right);
  }
  return rootNode;
};
const invertTree = (tree) => {
  return revert(tree);   
};

invertTree();
