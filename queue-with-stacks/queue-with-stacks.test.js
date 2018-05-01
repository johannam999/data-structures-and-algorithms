'use strict';

const Stack = require('./queue-with-stacks.js');


describe('testing push', () => {
  test(' test stack A to be empty', () => {
    const testStackA = new Stack();
    expect(testStackA.stackA).toEqual([]);
  });
  test(' test stack B to be empty', () => {
    const testStackA = new Stack();
    expect(testStackA.stackB).toEqual([]);
  });
  
  test('push test', () => {
    const testStackA = new Stack();
    testStackA.enqueue(3);
    testStackA.enqueue(4);
    testStackA.enqueue(5);
    testStackA.enqueue(6);

    expect(testStackA.stackA).toEqual([3, 4, 5, 6]);  
  });
  
  test('dequeue test', () => {
    const testStackA = new Stack();
    testStackA.enqueue(3);
    testStackA.enqueue(4);
    testStackA.enqueue(5);
    testStackA.enqueue(6);

    expect(testStackA.stackA).toEqual([3, 4, 5, 6]);
    expect(testStackA.dequeue()).toEqual(3);
    expect(testStackA.stackA).toEqual([4, 5, 6]);
  });
});
