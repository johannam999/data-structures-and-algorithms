function reverseArr(array) {
  const newArr = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    const elem = array.pop();
    newArr.push(elem);
  }
  return newArr;
}

reverseArr(['a', 'b', 'c', 'd', 'e', 'f']);
