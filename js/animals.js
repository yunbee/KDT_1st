// @ts-check
/* eslint-disable */

// const exports = require('constants');

// common 방식
// const animals = ['dog', 'cat'];
// exports.animals = animals;

// //화살표함수 -> 백엔드에서 많이씀
// exports.showAnimals = function showAnimals() {
//   animals.map((el) => console.log(el));
// };

// module.exports = {
//   animals,
//   showAnimals,
// };

//익명함수
// function showAnimals() {
//     animals.map(function (el) {
//         return console.log(el);
//     });
// }

//es6 방식

export const animals = ['dog', 'cat'];

export function showAnimals() {
  animals.map((el) => console.log(el));
}
