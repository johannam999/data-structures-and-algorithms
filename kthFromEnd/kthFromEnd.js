'use strict';

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
    const index = length - 1 - k;

    current = this.head;
    while (current) {
      if (count === index) {
        return current;
      }
      count += 1;
      current = current.next;
    }
    return undefined;
  }
};

