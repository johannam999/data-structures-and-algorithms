'uses strict';

import leftJoin from './left-join';

const map1 = { 
  happy: 'content', 
  upset: 'sad', 
  angry: 'mad', 
  hopeless: 'desperate', 
};

const map2 = { 
  happy: 'unhappy', 
  upset: 'satisfied',
  angry: 'excited',
  relaxed: 'easy',
};

console.log(Object.keys(leftJoin(map1, map2)));

describe('#leftJoin', () => {
  test('testing the final object', () => {
    expect(leftJoin(map1, map2).upset[1]).toEqual('satisfied');
    expect(leftJoin(map1, map2).relaxed).toBeFalsy();
    expect(leftJoin(map1, map2).angry).toBeInstanceOf(Array); 
  });

  test('testing the length and data type ', () => {
    expect(Object.keys(leftJoin(map1, map2))).toHaveLength(4);
    expect(leftJoin(map1, map2)).toBeInstanceOf(Object);
  });

  test('if no left hash, return null', () => {
    expect(leftJoin()).toBe(undefined);
  });
});
