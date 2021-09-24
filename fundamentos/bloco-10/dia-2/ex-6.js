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
      };

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

const getAnimal = async (animalName) => {
  const animal = Animals.find((animal) => animal.name === animalName);
  if (animal){
    return animal
  }else{
    return new Error('Nenhum animal com esse nome!');
    
  }
  // try {
  // } catch (error) {
  // }
}

module.exports = {Animals, findAnimalsByType, getListAnimals, getAnimal}