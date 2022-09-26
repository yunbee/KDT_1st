// @ts-check
/* eslint-disable */

// common 방식
// const animals = require('./animals');

// console.log(animals.animals);
// animals.showAnimals();

// const { animals, showAnimals } = require('./animals');

// console.log(animals);
// showAnimals();

//es6 방식
// import { animals, showAnimals } from './animals.js';

// console.log(animals);
// showAnimals();

// import * as animals from './animals.js';

// console.log(animals);
// animals.showAnimals();

// import { animals as ani, showAnimals as show } from './animals.js';

// console.log(ani);
// show();

//human.js
// const human = require('./human.js');

// human.showNames();

import { names, showNames } from './human.js';
showNames();
