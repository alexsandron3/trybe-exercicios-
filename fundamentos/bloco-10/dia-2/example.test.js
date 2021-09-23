// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//         done();
//     }catch (err) {
//       done(err);
//     }
//   }, 500);
// });

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });

// const asyncSum = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b +1;
//     callback(result);
//   }, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (result) => {
//     try {
//       expect(result).toBe(16);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Não possui esse tipo de animal.'));
    }, 100);
  })
);

test('Testando com async/await', async () => {
  const listDogs = await findAnimalsByType('Dog');
  expect(listDogs[0].name).toEqual('Dorminhoco');
  expect(listDogs[1].name).toEqual('Soneca');
});

test('Testando com async/await, testando o reject', async () => {
  expect.assertions(1);

  try {
    await findAnimalsByType('Lion');
  } catch (error) {
    expect(error).toEqual(new Error('Não possui esse tipo de animal.'));
  }
});


// describe('Quando o tipo do animal, existe', () => {
//   test('Retorne a lista de animais', () => (
//     findAnimalsByType('Dog').then((listDogs) => {
//       expect(listDogs[0].name).toEqual('Dorminhoco');
//       expect(listDogs[1].name).toEqual('Soneca');
//     })
//   ));
// });
// describe('Quando o tipo do animal, não existe', () => {
//   test('Retorne a lista de animais', () => {
//     expect.assertions(1);
//     return findAnimalsByType('Lion').catch((error) => (
//       expect(error.message).toMatch('Não possui esse tipo de animal.')
//     ));
//   });
// });

// describe('Testando promise - findAnimalsByType', () => {
//   describe('Quando o tipo do animal existe', () => {
//     test('Retorne a lista de animais', () => {
//       const listDogs = [
//         { name: 'Dorminhoco', age: 1, type: 'Dog' },
//         { name: 'Soneca', age: 2, type: 'Dog' },
//       ];
//       return expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
//     });
//   });

//   describe('Quando o tipo de animal não existe', () => {
//     test('Retorna um erro', () => (
//       expect(findAnimalsByType('Lion'))
//         .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
//     ));
//   });
// });