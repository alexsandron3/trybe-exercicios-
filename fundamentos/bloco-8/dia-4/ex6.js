const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // return  students.map((student, index) => { const studentGrade = grades[index].reduce((acc, grade) => acc += grade) /5;
  //   return {name: student, average: studentGrade};
  // })
  return  students.map((student, index) =>  ({name: student, average: grades[index].reduce((acc, grade) => acc += grade) / grades[0].length}))
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

// console.log(studentAverage())

assert.deepStrictEqual(studentAverage(), expected);