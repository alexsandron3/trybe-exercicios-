const assert = require('assert');
const books = require('./books');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  return books
  .filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').map((book) => book.author.name).sort()
}
console.log(fantasyOrScienceFictionAuthors())
// assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);