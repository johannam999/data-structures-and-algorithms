
'use strict';

const leftJoin = (mapA, mapB) => {
  if (!mapA) return undefined;
  if (!mapB) return undefined;

  const result = {};
  Object.keys(mapA).forEach((key) => {
    result[key] = [mapA[key]];
    if (mapB[key]) {
      result[key].push(mapB[key]);
    } 
  });
  return result;
};

export default leftJoin;
