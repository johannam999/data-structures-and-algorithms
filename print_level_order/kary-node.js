'use strict';

export default class KAryNode {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.level = [];
  }

  appendChild(value) {
    const nodeToAppend = new KAryNode(value);
    this.children.push(nodeToAppend);
  }
}
