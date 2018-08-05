'use strict';

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxContainer = 0;
  
  while (left < right) {
    const distance = right - left;
    const container = distance * Math.min(height[left], height[right]);
    if (maxContainer < container) {
      maxContainer = container;
    }  
    if (height[left] >= height[right]) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return maxContainer;
};

maxArea();
