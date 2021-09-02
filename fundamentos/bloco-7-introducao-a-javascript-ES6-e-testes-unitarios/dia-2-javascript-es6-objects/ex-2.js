const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1
const addObjectProp = (obj, key, value) => obj[key] = value;
addObjectProp(lesson2, 'turno', 'noite');

// 2
const listObjectKeys = obj =>  Object.keys(obj);

// 3
const objectSize = obj =>  Object.keys(obj).length;

// 4
const listObjectValues = obj => Object.values(obj);

// 5
let allLesson = Object.assign({}, {lesson1, lesson2, lesson3});

// 6
const objectCountValue = (obj, key) => {
  const qttOfObjects = objectSize(obj);
  let keySum = 0;
  for (i = 0; i < qttOfObjects; i += 1) {
    const allObjectKeys = Object.keys(obj);
    const eachObjectKey = allObjectKeys[i];
    keySum += obj[eachObjectKey][key];
  }
  return keySum;
};
console.log(objectCountValue(allLesson, 'numeroEstudantes'));

// 7
const getValueByNumber = (obj, key) => {
  const object = listObjectValues(obj);
  return object[key];
};

// 8
const verifyPair = (obj, key, value) =>  obj[key] === value;
verifyPair(lesson3, 'materia', 'Matemática');


// console.log(listObjectValues(lesson2));
// console.log(getValueByNumber(lesson1, 0));
// console.log(verifyPair(lesson3, 'turno', 'noite'));


