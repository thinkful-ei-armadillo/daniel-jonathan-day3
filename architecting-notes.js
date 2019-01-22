/* global $ */
'use strict';

// Avoiding spaghetti code ----------------------------------
// craft functions with disrecte purposes, so they can be easily maintained by new devs
// store underlying data OUTSIDE the DOM

// For larger projects, write user stories FIRST 
// THEN write PSUEDOCODE for a starting point that will be easy to read and maintainable

// USER STORIES ----------------------------------
// short statements describing precisely what a user will be able to do in your final app
// be specific and granular (at every step) assume nothing.
// stories should be understandable by both technical and non-technical stakeholders
// examples
// --As a user, upon first loading the app, I can see an empty shopping list
// --As a user, I can type in a shopping item title and add it to the list
// --As a user, I can delete an item from the list
// --As a user, I can mark an item as completed

// FUNCTION STUBS ----------------------------------
// small, single purpose functions are a cornerstone of maintainable code
// programs are made up of functions calling functions calling functions. don't be afraid of
//    chunking out functions to do specific chunks of work
// stubbing empty function names is a good practice to get in the habit of breaking down steps
//    to complete a given app task
// very often, you will be able to map your user stories to functions
// example
function handleAddItem(){} // each of these functions have a separate task
function handleDeleteItem(){}
function handleToggleItem(){}
function renderShoppingList(){}

function main(){          // this main function calls all the specific function tasks
  renderShoppingList();
  handleAddItem();
  handleDeleteItem();
  handleToggleItem();
}

// Run the `main` function when DOM loads:
$(main);              // we call main function to run all tasks required for the user functionality



// DATA MODELING ----------------------------------
// get the truth out of the DOM
// --data in the DOM is BAD --- unreliable for the user
// storing and changing information the DOM is SLOW, adds complexity, and makes the code fragile
// --changes to UI and design could break how the app recieves and stores data
// --feature changes could require updates to many places in the codebase
// --bugs appear when one event needs to change multiple components in the DOM
// example
$('.shopping-list-form').submit(function(event) {
  event.preventDefault();
  const itemName = $('#input').val();
  $('.shopping-list').append(`<li>${itemName}</li>`); // `<li>${itemName}</li>` ONLY exists in DOM
});

// Where to store the data? ------
// store the underlying data in regular JS data types, so you can easily reason about it
//    this is a form of SEPARATING CONCERNS
// whenever you change your store data, run your 'render' function to re-generate the DOM
// example STORE data type - source of 'truth' for what you see in the UI
const store = [
  { name: 'apples', completed: false },
  { name: 'oranges', completed: true },
  { name: 'bananas', completed: false }
];

// renderShoppingList()------
// renders the shopping list to the page, using STORE as the source of truth
// --it must iterate through the store
// --generates new <li> DOM element for each new item
// --place or replaces the contents of <ul> with new <li> elements
// DOESNT
// --does not rely on any input from the user or the DOM, only reads from the store
// --does not make any changes to the store --- it is READ-ONLY
// --does not worry about how a <li> is generated -- another function should be responsible
// --     for that template

// creating a template ------
// templates are snippets of HTML that are mostly static but have areas with dynamic data
// in our <li> shipping list item, what data is dynamic?
// --item title
// --item's index in the store array (so we can ID it when we mutate the object)
// --applying a CSS class if item is completed
// example
function generateShoppingItemHtml(item, itemIndex){
  const checkedClass = item.checked ? 'shopping-item__checked' : '';
  // template code -- item selectors only come from arguments passed in and vars inside the function
  return `
    <li class="js-item-index-element" data-item-index="${itemIndex}"> 
      <span class="shopping-item js-shopping-item ${checkedClass}">${item.name}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle js-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete js-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
   </li>
  `;
}

// iterating through the STORE ------
// --when you want to iterate through an array and return a new array with the same length,
// --     but altered elements, use the .map() function
// --call our template generator on each item in the array
// --convert the results into a single string
// example
function generateShoppingListElements(items){
  // Create new array of HTML strings
  const elements = items.map((item, index) => {
    return generateShoppingItemHtml(item, index);
  });

  // Join the array into a single string and return it
  return elements.join();
}

// putting renderShoppingList() all together ------
// --generate the new HTML with our generator function
// --apply the HTML to the DOM

const SHOPPING_LIST_EL = $('.shopping-list');

function renderShoppingList() {
  const html = generateShoppingListElements(STORE);
  SHOPPING_LIST_EL.html(html);  
}

// DO NOT USE PIECEMEAL DOM MANIPULATION METHODS TODAY
no .append()
no .prepend()
no .hide(), .show()
no .toggleClass()
// DO USE the DOM traversal, retrieval, and replace methods
.find(), .closest(), etc
.data(), .attr()
.html()    // replaces contents entirely; does not insert, remove, modify in place


// Previewing REACT -- one-way data flow ----------------------------------
// building 'React-fully' with jQuery
// --an architectural pattern is critical for an app of any moderate size
// --there are pros/cons to any pattern -- what is important is that we are:
// ----using a pattern
// ----we're using the same pattern as a cohort/team for optimal collaboration

// Reactful Pattern - Event Listeners will Always ------------
// --(optional) get info from DOM related to the user's action
// --change the store
// --render
//            pseudocode to demonstrate:
// selecting parent element -- then listening to an event on a child element     
$('.foo-element').on('click', '.foo-target', event => {  // selecting event listener
  // Get action information from DOM
  actionInfo = $(event.target).traversing().dataOrAttr();

  // Change the store
  changeTheStoreFoo(actionInfo);

  // Render
  renderComponent();
});

// pass by reference or value? ------------
// --primitives (string, number, boolean) are passed by value
// --complex data types (arrays, objects) are passed by reference

// why this matters ------------
// --Our functions receive objects from the `store`
// --If a function is passed an object and then makes changes to the object,
//      it is now permanently mutated
// --If a function was passed a primitive, it would only receive the value,
//      not a reference to that primitive, and so any changes would not affect the original
// --As a general rule, relying on the existence of a global `store` variable
//      is not a best practice, but it is acceptable for these small applications and early exercises.


// handing user actions ------------
// --need to listen for user action events:
// ----user clicked 'check' button
// ----user typed an item name and submitted the form
// --the 'check' and 'delete' buttons only appear on the DOM when a shopping list item is created
// ----how do we place a listener on these buttons when they don't exist on DOM load?
// ----EVENT DELEGATION


// the store is more than a few items ------------
// the extended tasks require that some of the data int he store is NOT displayed on the page: