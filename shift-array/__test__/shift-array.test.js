'use strict';

const shiftArray = require('../shift-array.js');

describe('testing new array', () => {
  test('should new value inside even array', () => { 
    expect(shiftArray.insertShiftArray(['4', '5', '7', '8'], '6')).toEqual(['4', '5', '6', '7', '8']);
  });
  test('should new value inside odd array', () => { 
    expect(shiftArray.insertShiftArray(['a', 'b', 'c', 'd', 'e'], 'f')).toEqual(['a', 'b', 'c', 'f', 'd', 'e']);
  });
  test('should new value inside empty array', () => { 
    expect(shiftArray.insertShiftArray([], 'f')).toContain('f');
  });   
});
