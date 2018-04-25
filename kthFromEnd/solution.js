'use strict';

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }


const Node = require('./node');


module.exports = class LinkedList { // time: O(1), space: O(1)
  constructor() {
    this.head = null;
  }

  insertAtHead(value) { // time: O(1), space: O(1)
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  insertAtEnd(value) { // time: O(n), space: O(1)
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  kValueFinder(k) {
    let current = this.head;
    let length = 1;
    let count = 0;

    if (this.head === null) {
      return null;
    }
    while (current.next) {
      current = current.next;
      length += 1;  
    }
    console.log('length', length);
    const index = length - 1 - k;
    console.log('index', index);

    current = this.head;
    while (current) {
      console.log('count', count, current.value);
      if (count === index) {
        return current;
      }
      count += 1;
      current = current.next;
    }
    return undefined;
  }
};

// const list = new LinkedList();
// list.insertAtEnd(6);
// list.insertAtEnd(7);
// list.insertAtEnd(8);
// list.insertAtEnd(9);

// console.log(list.kValueFinder(0));

// const list = new LinkedList();
// list.insertAtEnd(1);
// list.insertAtEnd(2);
// list.insertAtEnd(3);
// console.log(list.kValueFinder());
