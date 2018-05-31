'use strict';

import BinaryTree from './binary-tree';
import Node from './node';
import treeIntersection from './tree-intersection';


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const fifteen = new Node(15);
const nine = new Node(9);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = fifteen;
seven.right = nine;

const twoB = new Node(2);
const sevenB = new Node(7);
const nineB = new Node(9);
const elevenB = new Node(11);
const tenB = new Node(10);
const fiveB = new Node(5);

tenB.left = nineB;
tenB.right = twoB;
twoB.right = sevenB;
sevenB.right = elevenB;
elevenB.left = fiveB;

describe(' testing treeIntersection function', () => {  
  test('testing empty array', () => {
    const treeA = new BinaryTree(one);
    const treeB = new BinaryTree(null);
    expect(treeIntersection(treeA, treeB)).toEqual([]);
  });

  test('should return array of 3 elements', () => {
    const testTreeA = new BinaryTree(one);
    const testTreeB = new BinaryTree(tenB);

    expect(treeIntersection(testTreeA, testTreeB)).toEqual([9, 2, 7, 5]);
  });
  test('should return array length', () => {
    const testTreeA = new BinaryTree(one);
    const testTreeB = new BinaryTree(tenB);
  
    expect(treeIntersection(testTreeA, testTreeB)).toHaveLength(4);
  });
});
