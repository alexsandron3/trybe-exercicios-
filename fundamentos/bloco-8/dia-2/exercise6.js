const assert = require('assert');
const books = require('./arrayOfBooks');
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  return books.some((element) => {
    return element.releaseYear >= 1980 && element.releaseYear <= 1989;
  })
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);