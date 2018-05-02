'use strict';

class AnimalShelter {
  constructor() {
    this.animalArr = [];
  }

  enqueue(animal) {
    this.animalArr.push(animal);
  }

  dequeue(pref) {
    if (pref === undefined) {
      return this.animalArr.shift();
    }
    for (let i = 0; i < this.animalArr.length; i++) {
      if (pref === this.animalArr[i].type) {
        const removeAnimal = this.animalArr.splice(i, 1);
        return removeAnimal[0];
      }
    }
    return null;
  }
}


module.exports = AnimalShelter;

