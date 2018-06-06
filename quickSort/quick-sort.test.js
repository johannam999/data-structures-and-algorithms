'use strict';

import quickSort from './quick-sort';

describe('testing function quickSort', () => {
  test('should return sorted array', () => {
    const test = quickSort([3, 6, 43, 2, 8, 1, 7, 4, 0]);
    expect(test).toEqual([0, 1, 2, 3, 4, 6, 7, 8, 43]);
  });
  test('should return initial array if less than 2 elements', () => { 
    expect(quickSort([])).toEqual([]);
  });
  test('testing the length pf the array', () => { 
    expect(quickSort([3, 6, 43, 2, 8, 1, 7, 4, 0])).toHaveLength(9);
  });  
  test('should return a typeof array', () => { 
    expect(quickSort([3, 8, 1, 4])).toBeInstanceOf(Array); 
  });    
});
