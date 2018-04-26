'use strict';


module.exports = function listMerge(list1, list2) {
  let currentNode = list1.head;
  let addedNode = list2.head;

  while (currentNode && addedNode) {
    const temp1 = currentNode.next;
    currentNode.next = addedNode;
    const temp2 = addedNode.next;
    addedNode.next = temp1;
    if (temp1 === null) {
      addedNode.next = temp2;
    } 
    currentNode = temp1;
    addedNode = temp2;
  }
  return list1;
};
