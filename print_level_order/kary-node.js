'use strict';

export default class KAryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.level = 1;
  }

  appendChild(value) {
    const nodeToAppend = new KAryNode(value);
    this.children.push(nodeToAppend);
  }
}
