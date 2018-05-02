
// 'use strict';

// class Cat {
//   constructor(name) {
//     this.name = name;
//     this.date = new Date();
//   }
// }
// class Dog {
//   constructor(name) {
//     this.name = name;
//     this.date = new Date();
//   }
// }

// class AnimalShelter {
//   constructor() {
//     this.catArr = [];
//     this.dogArr = [];
//   }

//   enqueue(animal) {
//     if (animal instanceof Cat) {
//       this.catArr.push(animal);
//       return animal;
//     }
//     if (animal instanceof Dog) {
//       this.dogArr.push(animal);
//       return animal;
//     }
//     return null;
//   }

//   dequeue(pref) {
//     if (pref === 'cat') {
//       const removeCat = this.catArr.shift();
//       return removeCat;
//     }
//     if (pref === 'dog') {
//       const removeDog = this.dogArr.shift();
//       return removeDog;
//     }
//     if (pref === undefined) {
//       if (this.catArr[0].date > this.dogArr[0].date) {
//         return this.dogArr.shift();
//       } 
//       return this.catArr.shift();
//     }
//     return null;
//   }
// }
