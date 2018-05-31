'use strict';

const traverseA = (rootNode, map) => {
  if (!rootNode) {
    return undefined;
  }
  map.set(rootNode.value, true);
  traverseA(rootNode.left, map);
  traverseA(rootNode.right, map);
  return undefined;
}; 
  

const traverseB = (rootNode, map, intersections) => {
  if (!rootNode) {
    return undefined;
  }
  if (map.get(rootNode.value)) {
    intersections.push(rootNode.value);
  }
  traverseB(rootNode.left, map, intersections);
  traverseB(rootNode.right, map, intersections);
  return undefined;
}; 

const treeIntersections = (treeA, treeB) => {
  const map = new Map();
  const intersections = [];

  traverseA(treeA.root, map);
  traverseB(treeB.root, map, intersections);

  return intersections;
}; 


export default treeIntersections; 

