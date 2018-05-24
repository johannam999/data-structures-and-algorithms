'use strict';

import Queue from 'queue-fifo';

export default class KAryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Time : O(n)
  // Space : O(w) -> O(n)


  findMatches(rootNode, value) {
    if (!this.root) return null;

    const queue = new Queue();
    queue.enqueue(rootNode);
    let currentNode = rootNode;
    const collection = [];
    
    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();
      if (currentNode.value === value) {
        collection.push(currentNode);
      }
      
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);  
      }
    }
    return collection;
  }
}
