let firstAngle = 60;
let secondAngle = -60;
let thirdAngle = 60;
let angleSum = firstAngle + secondAngle + thirdAngle;

if(firstAngle < 0 || secondAngle < 0 || thirdAngle < 0){
  console.log("Invalid angle");
}else{
  if( angleSum == 180 ){
    console.log(true)
  }else {
    console.log(false)
  }
}
