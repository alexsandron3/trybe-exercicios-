const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, name) => {
    // https://stackoverflow.com/a/27277867
    acc += name.match(/a/gi).length;
    return acc
  }, 0)
}
// console.log(containsA());
assert.deepStrictEqual(containsA(), 20);