//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verifyPalindrome (word){
  let isPalindrome = false;
  let splitedWord = word.split(""); 
  let splitedReversedWord = splitedWord.reverse();
  let fullReversedWord = splitedReversedWord.join('');

  if(fullReversedWord === word){
    isPalindrome = true;
  }else{
    isPalindrome = false;
  }
  return isPalindrome;
}

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function higherIndex(){
  for (index in array){
    if(array[index -1] > array[index]){
      console.log(array[index]);
    }
  }
}
let array = [2, 3, 6, 7, 10, 1];

for (index in array){

  if(array[index -1] > array[index]){

    let value = array[index];

  }

}
console.log(value);