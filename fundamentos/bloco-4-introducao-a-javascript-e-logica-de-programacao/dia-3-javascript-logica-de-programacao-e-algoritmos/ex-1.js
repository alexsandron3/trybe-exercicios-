let n = 12;
let square = "*";

for(let i = 0; i < n; i++){

  if(n <= 1){
    console.log("Precisa ser um número maior que 1")
    break;

  }else{
    console.log(square.repeat(n));

  }

}

