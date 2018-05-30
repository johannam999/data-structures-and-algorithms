'use strict';

import repeatedWord from './repeated-word';

describe('testing function repeatedWord', () => {
  test('should return first repeated word', () => { 
    expect(repeatedWord('This is a proper text, to test. Not A  spam.')).toContain('a');
  });
  test('should return truth when the result is not null', () => { 
    expect(repeatedWord('bla not is a  rtj a not')).not.toBeNull();
  });
  test('should return undefined if no word repeats', () => { 
    expect(repeatedWord('no repeating words')).toEqual(undefined);
  });   
});
