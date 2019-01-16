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
  d: 4,
}

function decode(code) {
  let keysArr = Object.keys(cipher);
  let decodedLetters = [];
  let codeArray = code.split(' ');
  for (let i = 0; i < codeArray.length; i++) {
    if (codeArray[i][0] === keysArr[i]) {
      decodedLetters.push(codeArray[i][cipher.a]);
    } else if (codeArray[i][0] === keysArr[i]){
      decodedLetters.push(codeArray[i][cipher.b]);
    } else if (codeArray[i][0] === keysArr[i]) {
      decodedLetters.push(codeArray[i][cipher.c]);
    } else if (codeArray[i][0] === keysArr[i]) {
      decodedLetters.push(codeArray[i][cipher.d]);
    } else {
      decodedLetters.push(' ');
    }
  }
  return decodedLetters;
}

decode(message);


// factory function with LOTR

// { nickname: 'gandalf', race: 'Wizard', origin: 'Middle Earth', attack: 10, defense: 6 },
//     { nickname: 'bilbo', race: 'Hobbit', origin: 'The Shire', attack: 2, defense: 1}

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
    evaluateFight: function() {
      return `Your opponent (${this.attack} - ${this.defense}).`;
    }
  };
}

const characters = [
  
];


const bilbo = characters.push(createCharacter('bilbo baggins', 'bilbo', 'hobbit', 'the shire', 2, 1));
const gandalf = characters.push(createCharacter('Gandalf the White', 'gandalf', 'wizard', 'Middle Earth', 10, 6));
const frodo = characters.push(createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2));
const aragorn = characters.push(createCharacter('Aragorn son of Arathorn'));

//bilbo.evaluateFight(gandalf);
