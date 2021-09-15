const assert = require('assert');

const sum = (nums = 0) => {
  const [...numss] = nums;
  console.log(numss);
}

// assert.strictEqual(sum(), 0);
// assert.strictEqual(sum(1), 1);
// assert.strictEqual(sum(1, 2), 3);
// assert.strictEqual(sum(1, 2, 3), 6);
// assert.strictEqual(sum(1, 2, 3, 4), 10);
sum()