
'use strict';

const Animals = require('./constructor');
const AnimalShelter = require('./fifo-animal-shelter');


describe('testing push', () => {
  test(' testing animal constructor ', () => {
    const animalTest = new Animals('miko', 'cat');
    expect(animalTest.name).toEqual('miko');
    expect(animalTest.type).toEqual('cat');
  });


  test(' #constructor AnimalShelter', () => {
    const testArray = new AnimalShelter();
    expect(testArray.animalArr).toEqual([]);
  });
  test(' testing enqueue', () => {
    const testArr = new AnimalShelter();
    const dog = new Animals('bubu', 'dog');
    const cat = new Animals('miko', 'cat');
    testArr.enqueue(dog);
    testArr.enqueue(cat);
    
    expect(testArr.animalArr[0].type).toContain('dog');
    expect(testArr.animalArr[1].type).toContain('cat');  
    expect(testArr.animalArr[2]).toEqual(undefined);  
  });
  test(' testing dequeue', () => {
    const testArr = new AnimalShelter();
    const dog = new Animals('bubu', 'dog');
    const cat = new Animals('miko', 'cat');
    testArr.enqueue(dog);
    testArr.enqueue(cat);
      
    expect(testArr.dequeue().type).toEqual('dog');
    expect(testArr.dequeue().type).toEqual('cat'); 
  });
});  
