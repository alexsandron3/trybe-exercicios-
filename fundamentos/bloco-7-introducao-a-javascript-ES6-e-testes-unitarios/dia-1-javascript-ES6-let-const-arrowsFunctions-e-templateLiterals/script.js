// EX 1
const testingScope = (escopo) => 
  console.log(escopo === true ? `ótimo, fui utilizada no escopo!` : `Não devo ser utilizada fora do meu escopo (if)`);

// testingScope(true);

// EX 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens.sort((a, b) => {
  return a - b;
})); // será necessário alterar essa linha 😉

