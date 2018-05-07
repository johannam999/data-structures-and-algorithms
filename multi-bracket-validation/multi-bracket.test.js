'use strict';

const multiBracketValidation = require('./multi-bracket-validation');

describe(' testing for brackets', () => {
  test('returns true', () => {
    expect(multiBracketValidation('[{}]')).toBeTruthy();
  });
  test('returns false', () => {
    expect(multiBracketValidation('[{(}]')).toBeFalsy();
  });
});
