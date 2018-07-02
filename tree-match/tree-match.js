'use strict';

function compareTrees(treeA, treeB) {
  let flag = true;
  function traverse(rootNodeA, rootNodeB) {
    if (!rootNodeA || !rootNodeB) {
      return undefined;
    }
    if (rootNodeA !== rootNodeB) {
      flag = false;
    }
    traverse(rootNodeA.left, rootNodeB.left);
    traverse(rootNodeA.right, rootNodeB.right);
    return undefined;   
  }
  traverse(treeA.root, treeB.root);
  return flag;
}

export default compareTrees;
