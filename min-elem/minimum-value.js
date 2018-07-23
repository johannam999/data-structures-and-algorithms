function minNumber(array) {
  let currMin = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < currMin) {
      currMin = array[i];
    }
  }
  return currMin;
}

minNumber([3, 4, 2, 4, 1, 3, 3, 5, 0]);
