// 'use strict';

// import Queue from 'queue-fifo';

// export default class KAryTree {
//   constructor(root = null) {
//     this.root = root;
//   }

//   // Time : O(n)
//   // Space : O(w) -> O(n)

//   toString(tree) {
//     if (!tree.root) return null;
//     return this._toString();
//   }
//   let 
//   _toString(tree) {
//     let str = '';
//     const queue = new Queue();
//     let level = new Queue();
//     queue.enqueue(tree.root);
//     level.enqueue(tree.root.value);
//     let previousLevel = -1;

//     let currentNode = null;

//     while (!queue.isEmpty()) {
//       currentNode = queue.dequeue();
      
//       for (let i = 0; i < currentNode.children.length; i++) {
//         queue.enqueue(currentNode.children[i]);
//       }
//     }
//     return str;
//   }
// }
