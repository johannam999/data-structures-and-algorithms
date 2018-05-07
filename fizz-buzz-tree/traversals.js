'use strict';

let stringNode = '';

const inOrderTraversal = (rootNode) => {
  if (!rootNode) {
    return undefined;
  }

  inOrderTraversal(rootNode.left);
  inOrderTraversal(rootNode.right);
  
  return stringNode;
};

export default inOrderTraversal; 
