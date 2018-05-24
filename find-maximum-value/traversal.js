'use strict';


const findMaxValue = (tree) => {
  if (!tree.root) {
    return undefined;
  }
  let maxValue = 0;

  const findMaxValueTraversal = (rootNode) => {
    if (!rootNode) {
      return undefined;
    }

    if (rootNode.value > maxValue) {
      maxValue = rootNode.value;
    }
    findMaxValueTraversal(rootNode.left);
    findMaxValueTraversal(rootNode.right);
    
    return undefined;
  };

  console.log(findMaxValueTraversal(tree.root));
  return maxValue;
};


export default findMaxValue;
