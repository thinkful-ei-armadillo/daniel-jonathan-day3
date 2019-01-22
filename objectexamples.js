'use strict';

// Empty object----------------------------------
const yacht = {};

// A more useful object - has 6 properties (including one method)------------------------------
const littleYacht = {
  // Properties are key/value pairs - key => 'floorColor', value => 'red'
  floorColor: 'red',
  maximumLbs: 1000,
  inOperation: true,
  christened: false,
  hornSound: 'Ride of the Walkeries',

  // Method
  playHorn: function() {
    console.log(littleYacht.hornSound);
  }
};

// accessing props of an obj----------------------------------
console.log(littleYacht.floorColor); // "red" using dot notation

console.log(littleYacht['floorColor']); //red using bracket notation

// object destructuring----------------------------------

function describeYacht(yacht) {
  const { floorColor, maximumLbs } = yacht;

  if (floorColor === 'yellow') {
    return `${floorColor}?! What were you thinking?!`;
  }

  return `This yacht's floor is painted ${floorColor} 
  and can hold a max of ${maximumLbs} lbs.`;
}

describeYacht('yellow', 100);


// for-in loops----------------------------------
// iterates through all enumerable keys in an obj
for (const key in obj) {
  console.log(key);
}

// can use key to access the obj value
for (const key in obj) {
  const value = obj[key];
  console.log(value);
}

// in operator----------------------------------
// checks existence of key in obj
function checkExistence(key, obj) {
  return key in obj;
}

const person = { name: 'rich', loc: 'california' };
checkExistence('name', person);
checkExistence('where', person);

checkExistence('floorColor', littleYacht);  // => true

// spread operator in obj----------------------------------
// helps merge obj
const littleYacht2 = {
  roofColor: "green"  // new key, will be added
  christened: true    // duplicate key, will be overwritten
};

const newYacht = { ...littleYacht, ...littleYacht2 };

// OBJECT ASSIGN ----------------------------------
// also good for obj merging
const yacht1 = {
  floorColor: 'red'
};

const yacht2 = {
  floorColor: 'blue'
};

Object.assign(yacht1, yacht2);

// and good for making obj copies
const yacht3 = Object.assign({}, yacht1, yacht2);


// const with objects----------------------------------
// you CAN always mutate objects, even if declared with const
const pet = {
  name: "kitty",
  type: "cat"
};

pet.type = "dog";

// you CAN'T do this - reassigning the variable to another value
const pet = {
  name: "kitty"
};

pet = { name: 'tabby' };
pet = 'tabby';

// PROPERTY VALUE SHORTHAND----------------------------------
// convenient shorthand when creating an obj if your local var name matches the new obj key
// Function that returns a new 'cat' object:
function createCat(name) {
  const color = getRandomColor();
  const breed = getRandomBreed();

  return {
    eyes: 2,
    legs: 4
    name,     // same as name: name
    color,    // same as color: color
    breed,    // same as breed: breed
  };
}

const myCat = createCat('tabby');

// using THIS for objects----------------------------------
// THIS is assigned a value at the moment the function is invoked, not when it is defined
// THIS is assigned to the obj to the LEFT of the dot when the function was called
const littleYacht = {
  hornSound: "Ride of the Walkeries",
  playHorn: function() {
    // THIS is NOT assigned when the function is defined
      console.log(this.hornSound);
  }
};

littleYacht.playHorn(); 

const biggerYacht = {
hornSound: "Fog Horn",
playHorn: littleYacht.playHorn
};

biggerYacht.playHorn(); 

// FACTORY FUNCTIONS----------------------------------
// functions that return an object

function createAnimal(type, size) {
  const validTypes = ['dog', 'cat'];
  if (!type || !size) throw new TypeError('Missing required attributes');
  if (!validTypes.includes(type)) throw new TypeError('Unknown animal type');

  return {
    type, size,
    speak: function() {
      return this.type === 'dog' ? 'Woof!' : 'Meow!'; 
    }
  };
}



const dog = createAnimal("dog", "large");
console.log(dog.type);     // => 'dog'
console.log(dog.speak());  // => 'Woof!'

const cat = createAnimal("cat", "small");
console.log(cat.type);     // => 'cat'
console.log(cat.speak());  // => 'Meow!'

const invalid = createAnimal();
// => TypeError: Missing required attributes

// alt method of above is below
// Function constructors have special behavior when used with `new` keyword
function Animal(type, size) {
  const validTypes = ['dog', 'cat'];
  if (!type || !size) throw new TypeError('Missing required attributes');
  if (!validTypes.includes(type)) throw new TypeError('Unknown animal type');

  this.type = type;
  this.size = size;
}

Animal.prototype.speak = function() {
  return this.type === 'dog' ? 'Woof!' : 'Meow!'; 
};

const dog = new Animal("dog", "large");
console.log(dog.type);     // => 'dog'
console.log(dog.speak());  // => 'Woof!'

const cat = new Animal("cat", "small");
console.log(cat.type);     // => 'cat'
console.log(cat.speak());  // => 'Meow!'

const invalid = new Animal();
// => TypeError: Missing required attributes


// INHERITANCE// ----------------------------------
// children always inherit properties/methods from parents
// JS is a PROTOTYPAL language, not CLASSical like class-oriented languages
// BUT JS does have some inheritance traits of OOP in Function Constructor Inheritance (Pseudo Classical)
// --it uses a function intended for construction, sometimes offers nice options like instanceof
// --we define a TYPE and make everything from that type
// factory functions/class free OOP inherit differently
// --just uses functions and objects
// --are slightly more expensive in memory


// ANIMAL IN ES6 using class syntax
class Animal {
  constructor(type, size) {
    const validTypes = ['dog', 'cat'];
    if (!type || !size) throw new TypeError('Missing required attributes');
    if (!validTypes.includes(type)) throw new TypeError('Unknown animal type');

    this.type = type;
    this.size = size;  
  }
  
  speak() {
  	return this.type === 'dog' ? 'Woof!' : 'Meow!';
  }
}

// how the above comes out when translated to browser-usable code
// https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYGwhgzhAECCB2BLAtmE0DeAoa1gHt4IAXAJwFdhj9SAKYgTwAcBTAGmgkQC8WBKTDlx5CJaADc0iACYAVZixgBeaAG0A5NPwBzdR3XAwxdQF0A3ENyIAZtFoBCRq2gAfF9HtdeA4gAtS-ADu0PAswfKsAKKkAXTqALKIUIjw2tCkLACO5IgZ0tBGZIgARuTEiup8FsLQNnb2kiAyEYoAdCmg5NKK9Ap8Pv5BIWHQLdGxtOoAqvAA1vBB8AVIqOhOLJUWltB-Sa3r0Crr1cK7EK1eLIecPCxmuEIAvkJCEKxgs7QC2LgAkBnEcikJZnfYKQ5KFSaHTqaAAfmg6gA6vh8NZ7LCAFyI-IsIIYk7PZ5AA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=
