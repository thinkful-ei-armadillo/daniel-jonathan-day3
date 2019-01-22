//fizzbuzz notes

function fizzbuzz(n) {
  if (n % 15 === 0) return 'fizzbuzz';
  if (n % 5 === 0) return 'buzz';
  if (n % 3 === 0) return 'fizz';
  return n;
}

// collect input from user (number)
function getUserInput() {
  return $('#number-choice').val();
}

// count up from 1 to input number, running fizzbuzz over each iteration
function fizzbuzzer(countTo) {
  const results = [];
  for (let i = 1; i <= countTo; i++) {
    results.push(fizzbuzz(i));
  }
  return results;
}

function generateHtmlItem(fizzbuzzResult) {
  let className = '';
  if (typeof fizzbuzzResult !== 'number') {
    className = fizzbuzzResult;
  }
  return `
    <div class="fizz-buzz-item ${className}">
      <span>${fizzbuzzResult}</span>
    </div>
  `;
}

// depending on fizzbuzz output, create a different html snippet
function generateHtmlItems(fizzbuzzedResults) {
  return fizzbuzzedResults.map(generateHtmlItem);
}

// place all html snippets onto DOM
function addResults(html) {
  $('.js-results').html(html);
}

function main() {
  $('#number-chooser').submit(function(event) {
    event.preventDefault();
    const countTo = getUserInput();
    this.reset();
    const fizzbuzzedResults = fizzbuzzer(countTo);
    const html = generateHtmlItems(fizzbuzzedResults);
    addResults(html);
  });
}

$(main);