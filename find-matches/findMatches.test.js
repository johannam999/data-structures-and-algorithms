'use strict';

import KAryTree from './findMatches';
import KAryNode from './kary-node';

const one = new KAryNode(1);
one.appendChild(2);
one.appendChild(6); 
one.appendChild(4); 

one.children[1].appendChild(5); 
one.children[1].appendChild(6); 
one.children[1].appendChild(4);

one.children[1].children[1].appendChild(6);

const kAryTree = new KAryTree(one);

describe('findMatch(value)', () => {
  test('should return the node with the given value', () => {
    const find = kAryTree.findMatches(6);
    expect(find.value).toEqual(6);
    expect(find.children).toHaveLength(3);
    // expect(find.children[0].value).toEqual(5);
    // expect(find.children[2].value).toEqual(7);
    // expect(find.children[1].children[0].value).toEqual(8);
    // expect(kAryTree.find(8).value).toEqual(8);
  });
});

  // test('should return null if value doesn\'t exist in tree', () => {
  //   expect(kAryTree.find(10)).toBeNull();
  // });

  // test('should return null if tree root does not exist', () => {
  //   const kAryTreeNull = new KAryTree();
  //   expect(kAryTreeNull.root).toBeNull();
  // });
//});

// describe('KAryTree.findMatches()', () => {
//   test('should return string of the values of all nodes in breadth traversal', () => {
//     const string = kAryTree.findMatches(6);
//   expect(string.findMatches(6)).toBeTruthy();
  //   expect(string.charAt(0)).toEqual('1');
  //   expect(string.charAt(1)).toEqual('2');
  //   expect(string.charAt(2)).toEqual('2');
  //   expect(string.charAt(3)).toEqual('3');
  //   expect(string.charAt(4)).toEqual('4');
  //   expect(string.charAt(5)).toEqual('\n');
  //   expect(string.charAt(string.length - 2)).toEqual('8');
  //});

  // test('should return null if tree root does not exist', () => {
  //   const kAryTreeNull = new KAryTree(one);
  //   expect(kAryTreeNull.findMatches(6)).toBeTruthy();
  // });
//});

