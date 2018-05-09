'use strict';


const breadthFirstTraversal = (tree) => {
  const treeArray = [];
  let toDisplay = '';
  if (!tree.root) {
    return undefined;
  }
  treeArray.push(tree.root);

  while (treeArray.length > 0) {
    if (treeArray[0].left !== null) {
      treeArray.push(treeArray[0].left);
    }
    if (treeArray[0].right !== null) {
      treeArray.push(treeArray[0].right);
    }
    const removedVal = treeArray.shift();
    toDisplay += removedVal.value;
  }
  return toDisplay;
};

export default breadthFirstTraversal;
