'use strict';

import compareTrees from './tree-match';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(15);
const nine = new Node(9);


one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
const treeA= new BinaryTree(one);

const four2 = new Node(1);
const two2 = new Node(2);
const three3 = new Node(3);

four2.left =two2;
four2.right=three3;
const treeB= new BinaryTree(four2);