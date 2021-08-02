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


console.log(verifyPalindrome('arara'));
