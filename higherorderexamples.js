'use strict';

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

const arr = [0, 2, 7, 9, 10];

myForEach(arr, function(value, index) {
  console.log('Value at index ' + index + ' is ' + value);
});

myForEach(arr, function(value, index) {
  console.log('Here is the value! ' + value);
});

// counter higher order function

function createCounter() {
  let runningCount = 0;

  return function(increment = 1){
    runningCount += increment;
    return runningCount;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());    // 1
console.log(counter1());    // 2
console.log(counter1());    // 3

console.log(counter2(5));   // 5
console.log(counter2(3));   // 8
console.log(counter2(2));   // 10


// arrow functions

var studentList = function (students){
  console.log(students);
};			
studentList(['Joe', 'Cindy', 'Jeanne']);


// works the same as this

var studentList = (students) => console.log(students);
studentList(['Joe', 'Cindy', 'Jeanne']);

