'use strict';

import Queue from 'queue-fifo';

export default class KAryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Time : O(n)
  // Space : O(w) -> O(n)

  toString() {
    if (!this.root) return null;
    return this._toString();
  }

  _toString() {
    let str = '';
    const queue = new Queue();
    queue.enqueue(this.root);

    let currentNode = null;

    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();
      str += `${currentNode.value}`;
      
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    return str;
  }
}
