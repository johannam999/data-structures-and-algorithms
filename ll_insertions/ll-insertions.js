'use strict';

const Node = require('./node');


module.exports = class LinkedList { 
  constructor() {
    this.head = null;
  }

  insertAtHead(value) { 
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    return this;
  }

  insertAtEnd(value) { 
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
      return { previousNode: null, currentNode: this.head };
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
    const node = new Node(newValue);
    let currentNode = this.head;
    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        const currentNext = currentNode.next;
        currentNode.next = node;
        node.next = currentNext;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }
};

