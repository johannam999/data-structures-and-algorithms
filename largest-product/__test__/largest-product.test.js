'use strict';

const findProduct = require('../largest-product.js');

describe('testing the max product value', () => {
  test('should return value 56', () => { 
    expect(findProduct.largestProduct([[1, 2], [3, 4], [5, 6], [7, 8]])).toEqual(56);
  });
  test('should return value 90', () => { 
    expect(findProduct.largestProduct([[-1, 2, 4, 5], [5, 6, 7, 10], [7, 8, 9, 9]])).toEqual(90);
  });
  test('should return value 0', () => { 
    expect(findProduct.largestProduct([[0, 0], [0, 0], [0, 0], [0, 0]])).toEqual(0);
  });
});
