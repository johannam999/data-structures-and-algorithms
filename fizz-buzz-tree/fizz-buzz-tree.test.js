'use strict';

import BinaryTree from './fizz-buzz-tree';
import Node from './node';
import fizzBuzzTree from './traversals';


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


describe(' testing for the right order', () => {  
  test('testing for fizz', () => {
    const test = new BinaryTree(one);
    fizzBuzzTree(test.root);
    expect(one.right.value).toBe('fizz');
  });

  test('testing for fiz-buzz', () => {
    const test = new BinaryTree(one);
    fizzBuzzTree(test.root);
    expect(seven.left.value).toBe('fizz-buzz');
  });

  test('testing for buzz', () => {
    const test = new BinaryTree(one);
    fizzBuzzTree(test.root);
    expect(three.right.value).toBe('buzz');
  });
});
