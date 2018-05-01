'use strict';


class Stack {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }
  
  enqueue(value) { 
    this.stackA.push(value);
  }
  
  dequeue() {
    const lengthA = (this.stackA).length;
    for (let i = 0; i < lengthA; i++) {
      const tempA = (this.stackA).pop();
      (this.stackB).push(tempA);  
    }
    const removedVal = (this.stackB).pop();
    const lengthB = (this.stackB).length;
    for (let j = 0; j < lengthB; j++) {
      const tempB = this.stackB.pop();
      (this.stackA).push(tempB);
    }
    return removedVal;
  }
}

module.exports = Stack;
