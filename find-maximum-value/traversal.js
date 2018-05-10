'use strict';


const findMaxValue = (tree) => {
  if (!tree.root) {
    return undefined;
  }
  let maxValue = 0;

  const findMaxValueTRaversal = (rootNode) => {
    if (!rootNode) {
      return undefined;
    }

    if (rootNode.value > maxValue) {
      maxValue = rootNode.value;
    }
      findMaxValueTRaversal(rootNode.left);
      findMaxValueTRaversal(rootNode.right);
    }


  return maxValue;
};


export default findMaxValue;
