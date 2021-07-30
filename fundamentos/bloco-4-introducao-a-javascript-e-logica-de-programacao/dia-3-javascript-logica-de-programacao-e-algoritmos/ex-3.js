let n = 5;
let square = "";
// square = square.repeat(n);
let spaces = " ";
for(let i = 0; i < n; i++){

  if(n <= 1){
    console.log("Precisa ser um número maior que 1")
    break;

  }else{
    square = square + "*";
    if(square.length < n-i){
    }
    console.log(spaces.repeat(n-i) +square);

  }
}