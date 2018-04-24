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


  find(value) {
    if (!this.head) {
      throw new Error('__ERROR__ The list is empty');
    }

    if (this.head.value === value) {
      return this.head;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        return currentNode.next;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  insertAfter(value, newValue) {
    const currentNode = this.find(value);
    const node = new Node(newValue);
    
  
    if (currentNode.next === null) {
      currentNode.next = node;  
    } else {
      const currentNext = currentNode.next; 
      currentNode.next = node;
      node.next = currentNext;    
    }
  }

  insertBefore(value, newValue) {
    const currentNode = this.find(value);
    const newNode = new Node(newValue);

    if (currentNode === this.head) {
      this.head = newNode; 
      newNode.next = currentNode;
    } else {
      currentNode = newNode;
      currentNode.next = currentNode;
    }
  }
};
