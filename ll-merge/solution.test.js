'use strict';

const listMerge = require('./solution.js');
const LinkedList = require('./addAtEnd');

describe('addAtEnd.js', () => {
  test('#listMerge', () => {
    const List1 = new LinkedList();
    List1.insertAtEnd(5);
    List1.insertAtEnd(6);
    List1.insertAtEnd(7);
    List1.insertAtEnd(8);

    const List2 = new LinkedList();
    List2.insertAtEnd(1);
    List2.insertAtEnd(2);
    List2.insertAtEnd(3);
    List2.insertAtEnd(4);

    const List3 = new LinkedList();
    List3.insertAtEnd(5);
    List3.insertAtEnd(1);
    List3.insertAtEnd(6);
    List3.insertAtEnd(2);
    List3.insertAtEnd(7);
    List3.insertAtEnd(3);
    List3.insertAtEnd(8);
    List3.insertAtEnd(4);

    expect(listMerge(List1, List2)).toMatchObject(List3);
  });

  test('#listMerge odd list2 merge', () => {
    const List4 = new LinkedList();
    List4.insertAtEnd(5);
    List4.insertAtEnd(6);
    List4.insertAtEnd(7);
    

    const List5 = new LinkedList();
    List5.insertAtEnd(1);
    List5.insertAtEnd(2);
    List5.insertAtEnd(3);
    List5.insertAtEnd(4);
    List5.insertAtEnd(8);

    const List6 = new LinkedList();
    List6.insertAtEnd(5);
    List6.insertAtEnd(1);
    List6.insertAtEnd(6);
    List6.insertAtEnd(2);
    List6.insertAtEnd(7);
    List6.insertAtEnd(3);
    List6.insertAtEnd(4);
    List6.insertAtEnd(8);

    expect(listMerge(List4, List5)).toEqual(List6);
  });

  test('#listMerge odd list1 merge', () => {
    const List4 = new LinkedList();
    List4.insertAtEnd(5);
    List4.insertAtEnd(6);
    List4.insertAtEnd(7);
    List4.insertAtEnd(4);
    List4.insertAtEnd(8);
    

    const List5 = new LinkedList();
    List5.insertAtEnd(1);
    List5.insertAtEnd(2);
    List5.insertAtEnd(3);
    

    const List6 = new LinkedList();
    List6.insertAtEnd(5);
    List6.insertAtEnd(1);
    List6.insertAtEnd(6);
    List6.insertAtEnd(2);
    List6.insertAtEnd(7);
    List6.insertAtEnd(3);
    List6.insertAtEnd(4);
    List6.insertAtEnd(8);

    expect(listMerge(List4, List5)).toEqual(List6);
  });
});
