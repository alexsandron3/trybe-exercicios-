const assert = require('assert');
const books = require('./arrayOfBooks');

const expectedResult = false;

function authorUnique() {
  return books.every((elementEvery) => {
    return books.some((elementSome) => {
      return elementEvery.author.birthYear === elementSome.author.birthYear && elementEvery.author.name !== elementSome.author.name;
    })  
  })
}
console.log(authorUnique());
// assert.strictEqual(authorUnique(), expectedResult);