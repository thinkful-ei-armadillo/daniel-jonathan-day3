'use strict';
// DOM notes---

// http-server -p 8080 <-------- INITIALIZE A NEW LOCALHOST SERVER (http://localhost:8080)
// traversing is finding elements in the DOM
// manipulating is updating elements in the DOM
// 
// when using classes only for JS, always preface class name with 'js'
// like this: 'js-example-class' 
// $() <---- this is the standard jQuery selecter syntax

// EVENT LISTENERS
// Callback function - runs whenever a specified event occurs
// --example: $(handleClicks);
// 
// Event objects
// 
// --old jQuery used .ready() for document ready events, but now it uses
// -- $(callbackFn) instead <---- ONLY USE THIS
// 
// -- $(event.currentTarget) has info about what DOM element the user
// --has interacted with. use this!
// 
// --event.stopPropagation() tells the browser too stop an event from bubbling
// --up the DOM - running on the innermost element, but not for elements above
// 
// Event delegation
// --event listeners are effectively deaf to events related to any elements
// --created after initial binding.
// -- .on() method 
// -- if you need to use jQuery to watch for events on dynamically generated elements
// (that is, elements that get added to the page after the JavaScript has been loaded),
// don't use .click(). Instead use .on()
// 
// JQUERY AND DOM LECTURE NOTES--------------------------------------------------------

// writing less in jQuery-------------------------------

// vanilla - append a 'p' tag that has a class and text content into the 'main' tag
const p = document.createElement('p');
p.classList.add('special-paragraph');
p.textContent = 'Hello, this is a paragraph.';

const main = document.querySelector('main');
main.appendChild(p);

// jQuery
$('main').append('<p class="special-paragraph">This is a paragraph.</p>');

// vanilla - Grab all elements with "on-sale" class, then add class "featured" to each of them
const onSaleItems = document.querySelectorAll('.on-sale');
onSaleItems.forEach(item => {
  item.classList.add('featured');
});

// jQuery
$('.on-sale').addClass('featured');

// what's with the $?-------------------------------
// it's equal to 'jQuery'
$('div');        
// ^same as below
jQuery('div');


// jq has a flexible interface-------------------------------

// if the first argument is a string - SELECT element
$('div'); //this returns a jQuery 'wrapped' object

// If 1st argument is a string && 1st character a bracket - CREATE an element
$('<div>New div here!</div>');

// First argument is a function - code executes after DOM ready
$( function() {} );

// Or use a property on the $ object
$.each(); //all functions are also OBJECTS!


// JQ selectors are just like CSS!




// ---------------- DOM Traversal -------------------------------
// METHOD	                 // USE
.find()	                   // to nearest descendants (down)
.closest()	               // to nearest ancestors (up)
.siblings()	               // to same level
.parent(), .children()	   // to all parent or children specified
.first(), .last(), .eq()	 // to first/last/index of specified node

// ---------------- DOM MANIPULATION ----------------------------
// HETHOD	                              // USE
.addClass, .removeClass, . toggleClass  // Change a class
.val      	                            // Get / set the value
.attr     	                            // Get / set the attribute
.html                                   // Replace all HTML within element
.css                    	              // Get / set different CSS props

// common JQ pattern of getting or setting
// Get the value on attribute 'src' (TAKES 1 ARGUMENT)
.attr('src');

// Set the value on attribute 'src' (TAKES 2 ARGUMENTS)
.attr('src', 'a new value');


// DOM events --------------------------------------------------------------
// We want interactivity!
// We need to react to things happening in our page
// --Page has loaded (unloaded)
// --User clicks a button
// --Mouse moves over an element
// --Input field changing
// --Submission of forms

// Everything done in an active web browser is trackable
// examples -- full list at https://developer.mozilla.org/en-US/docs/Web/Events
mouseenter
mouseleave
click
dblclick	
mouseup	
mousedown
wheel	
dragstart	
dragend
cut	
paste	
keydown
keyup	
keypress	
scroll
resize	
playing	
waiting

// EVENT LISTENERS examples--------------------------------------------------------------
// $ is the JQ selector, .on('click') is the event listener, and the callback function in the
// 2nd argument gives the function/action that should be executed when the user clicks!
$("button").on('click', function(event) {
  console.log("A button was clicked");
});
// shorter way to write above ( by using shorthand .click() method, which just reps .on('click) )
$("button").click(function(event) {
  console.log("A button was clicked");
});


// Reminder: Callback functions----------------------
//   In JavaScript, functions are first-class objects
//   They are passed around like any other data type
//   Functions can be:
//       Stored in variables
//       Passed as arguments to another function
//       Created within functions
//       Returned from functions
//   A callback function is: a function passed in as an argument
//   to another function and invoked at a later time

// timing is everything with event listeners----------------------
// event BUBBLING----------------------
// An event fires on a specific element
// After the event fires, it will automatically fire sequentially on each
//   parent element all the way up
// Best Practice: Set event listeners at a higher level and respond to events
//   coming from lower levels

// BAD DELEGATION BELOW----------------------
// 1 - page loads, DOM is ready
// 2 - add event listeners
// 3 - new content added to DOM by event listeners
// 4 - add event listeners again :(?

// without delegation
$('.delete-button').on('click', function(event) {
  console.log('delete button clicked');
});

// GOOD DELEGATION BELOW----------------------
// 1 - page loads, DOM is ready
// 2 - add event listeners to single PARENT node
// 3 - new content added to DOM by event listeners
// nothing additional! -only triggers on child elements thanks to delegation!

// with delegation -- Optional second argument '.delete-button' puts delegation in place
$('.items').on('click', '.delete-button', function(event) {
  console.log('delete button clicked');
});

// this is how it happens, in VANILLA JS
function handleDeleteClick(event) {
  if (event.target.closest('.delete-button')) {
    console.log('delete button clicked');
  }
};

const itemsElement = document.querySelector('.items');
itemsElement.addEventListener('click', handleDeleteClick);


// event.currentTarget vs. event.target----------------------
// what exactly are you selecting in the DOM? BE PRECISE
// The element with listener, i.e. <body>
$('body').click(event => {
  $(event.currentTarget)
});
// The element clicked on -- <button> <div> or <body></body>
$('body').click(event => {
  $(event.target)
});


// EVENT OBJECTS----------------------
// Native to JavaScript as part of the DOM eventing system. It's not inherently part of jQuery.
// Just a regular JavaScript object with a ton of props that describe the event which just occurred
// If you use the event object to grab a DOM node, you need to wrap it in the jQuery function
//    to access JQ methods


$('body').click(event => {
  $(event.currentTarget) //jQuery function receives DOM node as first argument - same behavior as CSS selector
});

// RUNNING WEB SERVER VIA NODE PKG

$ npm install --global http-server

$ cd my-project
$ pwd
/home/rich/Documents/my-project

Starting up http-server, serving ./
Available on:
  http:127.0.0.1:8080
Hit CTRL-C to stop the server

// DEBUGGING

// --Web browsers often save assets (like JavaScript files) to make reloading pages quicker
// --Caching is bad for debugging - you are making frequent changes and need those reflected
//    in your browser
// --Manually force refresh with SHIFT-CMD-R (Mac) / SHIFT-F5 (Windows)

// Make sure your event listener is firing when you expect it
// Make sure you're selecting the right node(s)
// Make sure you're capturing the right data
// good way to test:

$('img').click(() => {
  // test this first before writing a lot of code...
  console.log('listener fired!');
});

// DOM ready debugging tip

$(function() {
  // DOM is ready...
});

// or

function main() {
  // DOM is ready...
}

$(main);
