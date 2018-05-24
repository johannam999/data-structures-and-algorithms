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
    const find = kAryTree.findMatches(one, 6);

    expect(find[0].value).toEqual(6);
    expect(find[1].value).toEqual(6);
  });
  test('should return the length of the array', () => {
    const find = kAryTree.findMatches(one, 6);
    expect(find).toHaveLength(3);
  });
  test('should check if the node inside the array is an object', () => {
    const find = kAryTree.findMatches(one, 6);
    expect(typeof find[1]).toBe('object');
  }); 
});
