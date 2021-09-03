const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomDamage = (min, max) =>  Math.floor(Math.random() * (max - min + 1) + min);


const dragonDamage = (dragon) =>  {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const drangonFinalDamage = randomDamage(minDamage, maxDamage);
  return drangonFinalDamage;
};
const warriorDamage = (warrior) =>  {
  const minDamage = warrior.strength;
  const maxDamage = warrior.strength + warrior.weaponDmg;
  const warriorFinalDamage = randomDamage(minDamage, maxDamage);
  return warriorFinalDamage;
};


const mageDamage = (mage) => {
  if (mage.mana < 15) return 'Não possui mana suficiente';
  const minDamage = mage.intelligence;
  const maxDamage = mage.intelligence * 2;
  const mageFinalDamage = randomDamage(minDamage, maxDamage);
  return mageFinalDamage;
};

const mageAttack = (mage) => {
  return {
    mageFinalDamage: mageDamage(mage),
    mana: mage.mana = mage.mana - 15,
  }
};

const gameActions = {
  // Crie as HOFs neste objeto.
};

