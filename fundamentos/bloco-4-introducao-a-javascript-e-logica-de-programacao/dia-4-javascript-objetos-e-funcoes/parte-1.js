let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida
function ex1(){
  return console.log('Bem-vinda', info.personagem);

}
//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:{
//  personagem: 'Margarida',
//  origem: 'Pato Donald',
// nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// recorrente: 'Sim'
// }

function ex2(){
  info['recorrente'] = 'Sim';
  return info;
}
info['recorrente'] = 'Sim';

//3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: 
// personagem
// origem
// nota
// recorrente

function ex3(){
  for (key in info){
    console.log(key);
  }
}

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

function ex4(){
  for( key in info){
    console.log(info[key])
  }
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
// 'Tio Patinhas', 
// 'Christmas on Bear Mountain, 
// Dell's Four Color Comics #178', 
// 'O último MacPatinhas', 
// 'Sim'.
//  Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain',
  nota: "Dell's Four Color Comics #178",
  familia: 'O último MacPatinhas',
  recorrente: 'Sim'
}


console.log(info.personagem, 'e', info2.personagem);
console.log(info.origem, 'e', info2.origem, 'e', info2.nota);
console.log(info.nota, 'e', info2.familia);
if(info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
  console.log('Ambos recorrentes');
}
