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
let allLesson = Object.assign({}, {lesson1, lesson2, lesson3});

console.log();

const opa = (obj) => {
  let number = Object.entries(obj).length;
  let sum = 0;
   sum += sum + 10;
  console.log(sum);
  number === 0 ? 0: opa(Object.entries(obj).length -1)
  return sum;
}
console.log(opa(allLesson))

// console.log(allLesson.length);
