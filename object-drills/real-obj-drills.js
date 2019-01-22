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

// const peopleArr = [
//   { name: 'Bob Marley', jobTitle: 'Musician' },
//   { name: 'Jon Hopkins', jobTitle: 'Doctor'},
//   { name: 'Fred Has', jobTitle: 'Car Salesman'}
// ];

// for (let i = 0; i < peopleArr.length; i++) {
//   console.log(`name: ${peopleArr[i].name} job title: ${peopleArr[i].jobTitle}`);
// }

// properties that aren't there

const peopleArr = [
  { name: 'Bob Marley', jobTitle: 'Musician', boss: 'Chad Person'},
  { name: 'Jon Hopkins', jobTitle: 'Doctor', boss: 'Chad Person'},
  { name: 'Fred Has', jobTitle: 'Car Salesman'}
];

for (let i = 0; i < peopleArr.length; i++) {
  if ( !peopleArr[i].boss ) {
    console.log(`${peopleArr[i].jobTitle} ${peopleArr[i].name} doesn't report to anybody.`);
  }
  else {
    console.log(`${peopleArr[i].jobTitle} ${peopleArr[i].name} reports to ${peopleArr[i].jobTitle}.`);
  }
}

// cracking the code
const message = 'craft block argon meter bells brown croon droop';
const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function decode(code) {
  let keysArr = Object.keys(cipher);
  let decodedLetters = [];
  let codeArray = code.split(' ');
  for (let i = 0; i < codeArray.length; i++) {
    if (codeArray[i][0] === keysArr[0]) {
      decodedLetters.push(codeArray[i][cipher.a]);
    } else if (codeArray[i][0] === keysArr[1]){
      decodedLetters.push(codeArray[i][cipher.b]);
    } else if (codeArray[i][0] === keysArr[2]) {
      decodedLetters.push(codeArray[i][cipher.c]);
    } else if (codeArray[i][0] === keysArr[3]) {
      decodedLetters.push(codeArray[i][cipher.d]);
    } else {
      decodedLetters.push(' ');
    }
  }
  console.log(`${decodedLetters[0]}${decodedLetters[1]}${decodedLetters[2]}${decodedLetters[3]}${decodedLetters[4]}${decodedLetters[5]}${decodedLetters[6]}${decodedLetters[7]}`);
}

decode(message);


// factory function with LOTR

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      return `${name} is a ${race} from ${origin}`;
    },
    evaluateFight: function(character) { 
      const x = character.defense > this.attack ? 0 : this.attack - character.defense;
      const y = this.defense > character.attack ? 0 : character.attack - this.defense;
      return `Your opponent takes ${x} damage and you receive ${y} damage`;},
  };
}

const characters = [];

characters.push(createCharacter('bilbo baggins', 'bilbo', 'Hobbit', 'the shire', 2, 1));
characters.push(createCharacter('Gandalf the White', 'gandalf', 'wizard', 'Middle Earth', 10, 6));
characters.push(createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2));
characters.push(createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8));

console.log(characters.find((character) => character.nickname === 'aragorn').describe());
const hobbitResult = characters.filter((character) => character.race === 'Hobbit');
console.log(hobbitResult);
const strongChars = characters.filter((character) => character.attack > 5);
console.log(strongChars);