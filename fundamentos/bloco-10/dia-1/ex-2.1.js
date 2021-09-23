function encode(decodedString) {
  // seu código aqui
  let splitedString = decodedString.split('');
  let encodedString = '';
  for (index in splitedString){
    switch (splitedString[index]) {
      case 'a':
        splitedString[index] = '1';
        break;
      case 'e':
        splitedString[index] = '2';
        break;
      case 'i':
        splitedString[index] = '3';
        break;
      case 'o':
        splitedString[index] = '4';
        break;
      case 'u':
        splitedString[index] = '5';
        break;
    }
  }
  encodedString = splitedString.join('');
  return encodedString;

}


function decode(encodedString) {
 // seu código aqui
 let splitedString = encodedString.split('');
 let decodedString = '';
 for (index in splitedString){
   switch (splitedString[index]) {
     case '1':
       splitedString[index] = 'a';
       break;
     case '2':
       splitedString[index] = 'e';
       break;
     case '3':
       splitedString[index] = 'i';
       break;
     case '4':
       splitedString[index] = 'o';
       break;
     case '5':
       splitedString[index] = 'u';
       break;
   }
 }
 decodedString = splitedString.join('');
 return decodedString;
}
const chalenges = {
  encode,
  decode
}
module.exports = chalenges;