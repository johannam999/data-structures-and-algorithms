
'use strict';

const leftJoin = (mapA, mapB) => {
  if (!mapA) return null;
  if (!mapB) return mapA;

  const result = {};
  Object.keys(mapA).forEach((key) => {
    result[key] = [mapA[key]];
    if (mapB[key]) {
      result[key].push(mapB[key]);
    } else {
      result[key].push(null);
    }
  });
  return result;
};

export default leftJoin;
