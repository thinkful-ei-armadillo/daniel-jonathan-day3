'use strict';

const dogs = ['golden retriever', 'husky'];
const cats = ['bengal', 'persian', 'siamese'];

const animals = [...dogs, 'squirrel', ...cats, 'coyote', 'fox'];
console.log(animals.length);


function getVolume(...dimensions) {
  return dimensions[0] * dimensions[1] * dimensions[2];
}

getVolume(5, 10, 3);
// => 150