'use strict';

import mergeSort from './merge-sort';

describe('testing function mergeSort', () => {
  test('should return an array sorted ', () => { 
    expect(mergeSort([3, 8, 1, 4, 0, 10, 23, 9])).toEqual([0, 1, 3, 4, 8, 9, 10, 23]);
  });
  test('should return the initial array if only single number ', () => { 
    expect(mergeSort([1])).toEqual([1]);
  });
  test('checking for an array ', () => { 
    expect(mergeSort([3, 8, 1, 4])).toBeInstanceOf(Array);
    expect(mergeSort([3, 8, 1, 4])).toHaveLength(4);
  });   
});
