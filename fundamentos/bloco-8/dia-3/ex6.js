const assert = require('assert');
const books = require('./books');


const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  return books.filter((book) => (2021 - book.releaseYear > 60))
}
console.log(oldBooks());
// assert.deepStrictEqual(oldBooks(), expectedResult);