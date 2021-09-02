const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const myArray = [0, 1, 3, 4, 5, 6, 7, 8, 9];
// 2.1
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// 2.2
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// 2.3
assert.deepStrictEqual(myArray, [0, 1, 3, 4, 5, 6, 7, 8, 9]);
// 2.4
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);