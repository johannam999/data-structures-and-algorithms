'use strict';

const binarySearch = require('../binary-search.js');

describe('testing the return value', () => {
  test('should return index value 2 ', () => { 
    expect(binarySearch.doBinarySearch([4, 6, 8, 3, 12], 8)).toEqual(2);
  });
  test('should return index value 0 ', () => { 
    expect(binarySearch.doBinarySearch(['a', 'b', 'c', 'd', 'e'], 'a')).toEqual(0);
  });
  test('should return -1 ', () => { 
    expect(binarySearch.doBinarySearch([4, 6, 8, 3, 12], 30)).toEqual(-1);
  });
});

