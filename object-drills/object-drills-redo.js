'use strict';
// obj creator
function createMyObject() {
  const objectResult = {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function () {
      console.log('hello');
    }
  };
  return objectResult;
}

// obj updater
function updateObject(obj) {
  obj.foo = 'foo',
  obj.bar = 'bar',
  obj.bizz = 'bizz',
  obj.bang = 'bang'
  return obj;
}
// self reference drill

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}

// 
const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}