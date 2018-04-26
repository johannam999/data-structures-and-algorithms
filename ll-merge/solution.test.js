'use strict';

const LinkedList = require('./solution.js');


describe('solution.js', () => {
  test('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  test('merge list ', () => {
    const testList1 = new LinkedList();
    testList1.insertAtEnd(5);
    testList1.insertAtEnd(6);
    testList1.insertAtEnd(7);
    testList1.insertAtEnd(8);

    const testList2 = new LinkedList();
    testList2.insertAtEnd(1);
    testList2.insertAtEnd(2);
    testList2.insertAtEnd(3);
    testList2.insertAtEnd(4);
  
    testList1.listMerge(testList2);

    expect(testList1.head.value).toEqual(5);
    expect(testList1.head.next.value).toEqual(1);
    expect(testList1.head.next.next.value).toEqual(6);
    expect(testList1.head.next.next.next.value).toEqual(2);
    expect(testList1.head.next.next.next.next.value).toEqual(7);
    expect(testList1.head.next.next.next.next.next.value).toEqual(3);
    expect(testList1.head.next.next.next.next.next.next.value).toEqual(8);
    expect(testList1.head.next.next.next.next.next.next.next.value).toEqual(4);
  });

  // test('merge list value ', () => {
  //   const testList1 = new LinkedList();
  //   testList1.insertAtEnd(5);
  //   testList1.insertAtEnd(6);
  //   testList1.insertAtEnd(7);
   

  //   const testList2 = new LinkedList();
  //   testList2.insertAtEnd(1);
  //   testList2.insertAtEnd(2);
  //   testList2.insertAtEnd(3);
  //   testList2.insertAtEnd(4);
  //   testList2.insertAtEnd(8);
  
  //   testList1.listMerge(testList2);

  //   expect(testList1.head.value).toEqual(5);
  //   expect(testList1.head.next.value).toEqual(1);
  //   expect(testList1.head.next.next.value).toEqual(6);
  //   expect(testList1.head.next.next.next.value).toEqual(2);
  //   expect(testList1.head.next.next.next.next.value).toEqual(7);
  //   expect(testList1.head.next.next.next.next.next.value).toEqual(3);
  //   expect(testList1.head.next.next.next.next.next.next.value).toEqual(4);
  //   expect(testList1.head.next.next.next.next.next.next.next.value).toEqual(8);
  // });
});
