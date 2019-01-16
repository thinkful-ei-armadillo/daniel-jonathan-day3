'use strict';

// object loaf hydration drill

const loaf = {
  flour: 300,
  water: 210,
  hydration: function () {
    return this.water / this.flour * 100;
  }
}

console.log(loaf.flour, loaf.water);

// loaf.hydration();

// const hydration = function () {
//   return this.water / this.flour * 100;
// };

console.log(loaf.hydration());

// object iteration drill
const obj1 = {
  foo: 'foo',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spam'
};

for (const key in obj1) {
  console.log(`${key}: ${obj1[key]}`);
}

// Arrays in objects

const foods = {
  meals: [ 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper' ]
}

console.log(foods.meals[3]);

// Arrays of objects

const peopleArr = [
  { name: 'Bob Marley', jobTitle: 'Musician' },
  { name: 'Jon Hopkins', jobTitle: 'Doctor'},
  { name: 'Fred Has', jobTitle: 'Car Salesman'}
];

for (let i = 0; i < peopleArr.length; i++) {
  console.log(`name: ${peopleArr[i].name} job title: ${peopleArr[i].jobTitle}`);
}