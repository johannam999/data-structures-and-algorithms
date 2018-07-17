'use strict';

function removeRotten(bagOfFruits) {
  if (!bagOfFruits || !bagOfFruits.length) { 
    return [];
  }
  return bagOfFruits.map(fruit => fruit.replace(/^rotten/g, '').toLowerCase());  
}
removeRotten();
