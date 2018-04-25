'use strict';

const LinkedList = require('./solution.js');


describe('solution.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });
  test('#kValueFinder', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    testList.insertAtEnd(8);
    expect(testList.kValueFinder(0).value).toEqual(8);
  });    
  test('should have value 5', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    expect(testList.kValueFinder(2).value).toEqual(5);
  });  
  test('should return undefined', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(5);
    testList.insertAtEnd(5);
    testList.insertAtEnd(6);
    testList.insertAtEnd(7);
    expect(testList.kValueFinder(3).value).toEqual(5);
  }); 
});
