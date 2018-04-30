'use strict';

const LinkedList = require('./ll-insertions.js');

describe('testing insertions after', () => {
  test('insert after test 1', () => {
    const testList1 = new LinkedList();
    testList1.insertAtEnd(5);
    testList1.insertAtEnd(6);
    testList1.insertAtEnd(7);
    testList1.insertAfter(6, 4); 

    function testList(expectedArray, actualLinkedList) {
      let currentNode = actualLinkedList.head;

      for (let i = 0; i < expectedArray.length; i++) {
        const expected = expectedArray[i];
        const actual = currentNode.value;
        expect(expected).toEqual(actual);
        currentNode = currentNode.next;
      }
    }
    testList([5, 6, 4, 7], testList1);
  });  

  test('insert after test 2', () => {
    const testList2 = new LinkedList();
    testList2.insertAtEnd(5);
    testList2.insertAtEnd(6);
    testList2.insertAtEnd(7);
    testList2.insertAfter(7, 0);

    function testList3(expectedArray, actualLinkedList) {
      let currentNode = actualLinkedList.head;
      for (let i = 0; i < expectedArray.length; i++) {
        const expected = expectedArray[i];
        const actual = currentNode.value;
        expect(expected).toEqual(actual);
        currentNode = currentNode.next;
      }
    }
    testList3([5, 6, 7, 0], testList2);
  });
});

describe('testing insertions before', () => {
  test('insert before t.1', () => {
    const testList11 = new LinkedList();
    testList11.insertAtEnd(5);
    testList11.insertAtEnd(6);
    testList11.insertBefore(6, 4); 

    function testList15(expectedArray, actualLinkedList) {
      let currentNode = actualLinkedList.head;
      for (let i = 0; i < expectedArray.length; i++) {
        const expected = expectedArray[i];
        const actual = currentNode.value;
        expect(expected).toEqual(actual);
        currentNode = currentNode.next;
      }
    }
    testList15([5, 4, 6], testList11);
  });

  test('insert before t.2', () => {
    const testList12 = new LinkedList();
    testList12.insertAtEnd(5);
    testList12.insertAtEnd(6);
    testList12.insertBefore(5, 4); 

    function testList13(expectedArray, actualLinkedList) {
      let currentNode = actualLinkedList.head;
      for (let i = 0; i < expectedArray.length; i++) {
        const expected = expectedArray[i];
        const actual = currentNode.value;
        expect(expected).toEqual(actual);
        currentNode = currentNode.next;
      }
    }
    testList13([4, 5, 6], testList12);
  });
});  
