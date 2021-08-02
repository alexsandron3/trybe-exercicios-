let n = 10;
let square = "*";

for(let i = 0; i <= n; i++){

  if(n <= 1){
    console.log("Precisa ser um número maior que 1")
    break;

  }else{
    if(i <= n){
      fullSquare = square.repeat(i);
      console.log(fullSquare);
    }
  }

}

