const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// 1.1
assert.strictEqual(sum(4, 5), 9);
// 1.2
assert.strictEqual(sum(0, 0), 0);
// 1.3
assert.throws(() => {
  sum(4, '5');
})
// assert.throws(sum(4, '5'));
// 1.4
assert.throws(() => {
  sum()
}, /^Error: parameters must be numbers$/)