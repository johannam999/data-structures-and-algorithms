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

  listMerge(list2) {
    const list1 = this;
    if (list1.head === null || list2.head === null) {
      return null;
    }
    let addedNode = list2.head;
    let currentNode = list1.head;

    while (currentNode) {
      const temp1 = currentNode.next;
      currentNode.next = addedNode;
      const temp2 = addedNode.next;
      addedNode.next = temp1;
      if (temp1 === null) {
        addedNode = temp2;
      } 
      currentNode = temp1;
      addedNode = temp2;
    }
    return list1;  
  }
};
