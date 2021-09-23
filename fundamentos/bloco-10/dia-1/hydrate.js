const hydrate = (string) => {
  // seu código aqui
  //Usando Regular Expressions para identificar inteiros dentro de uma string
  //Fonte: https://www.youtube.com/watch?v=pfkkdzeyx6U
  //Usando function reducer 
  //Fonte: https://www.youtube.com/watch?v=-LFjnY1PEDA

  let regex = /\d+/g;
  let drinks = string.match(regex);
  console.log(drinks);
  const reducer = (acc, currVal) => parseInt(acc) + parseInt(currVal);
  let waterNeeded = drinks.reduce(reducer);
  let message = '';
  if(waterNeeded == 1){
    message = waterNeeded + " copo de água";
  }else{
    message = waterNeeded + " copos de água";
  }
  return message;

}
module.exports = hydrate;