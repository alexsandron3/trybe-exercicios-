let n = 10;
let square = "";
// square = square.repeat(n);
let spaces = " ";
for(let i = 0; i < n; i++){

  if(n <= 1){
    console.log("Precisa ser um número maior que 1")
    break;

  }else{
    square = square + "*";
    fullSquare = spaces.repeat(n-i-1) +square; 
    console.log(fullSquare);

  }
}