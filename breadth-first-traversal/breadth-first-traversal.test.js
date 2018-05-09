'use strict';

import BinaryTree from './breadth-first-traversal';
import Node from './node';
import fizzBuzzTree from './traversal';


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);


one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;


describe(' testing positive', () => {  
  test('testing the right order', () => {
    const test = new BinaryTree(one);
    expect(fizzBuzzTree(test)).toBe('123645');
    expect(typeof fizzBuzzTree(test)).toEqual('string');
    expect(fizzBuzzTree(test)).not.toBe(undefined);
  });
  test('testing if the tree is a string', () => {
    const test = new BinaryTree(one);
    expect(typeof fizzBuzzTree(test)).toEqual('string');
  });
  test('testing if the tree is not empty', () => {
    const test = new BinaryTree(one);
    expect(fizzBuzzTree(test)).not.toBe(undefined);
  });
});
