function largestProduct(array) {
  let maxValue = 0;
  
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      const current = array[i][j];
      
      
      if (array[i - 1] !== undefined) {
        const product = array[i - 1][j] * current;
        if (product > maxValue) {
          maxValue = product; 
        }
      }
      
      if (array[i][j - 1] !== undefined) {
        const product = array[i][j - 1] * current;
        if (product > maxValue) {
          maxValue = product; 
        }
      }
    
      if (array[i + 1] !== undefined) {
        const product = array[i + 1][j] * current;
        if (product > maxValue) {
          maxValue = product; 
        }
      }
      if (array[i][j + 1] !== undefined) {
        const product = array[i][j + 1] * current;
        if (product > maxValue) {
          maxValue = product; 
        }
      } 
    }
  }
  return maxValue;
}

exports.largestProduct = largestProduct;

