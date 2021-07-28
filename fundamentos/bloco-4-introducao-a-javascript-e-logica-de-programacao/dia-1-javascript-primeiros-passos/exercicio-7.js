let percent = 50;

if(percent >=90 && percent <= 100){
  console.log("Sua nota é A");

}else if(percent >=80 && percent <90){
  console.log("Sua nota é B");

}else if(percent >=70 && percent < 80){
  console.log("Sua nota é C");

}else if(percent >=60 && percent < 70){
  console.log("Sua nota é D");

}else if(percent >=50 && percent < 60){
  console.log("Sua nota é E");

}else if(percent >=0 && percent <50){
  console.log("Sua nota é F")
}
else {
  console.log("error");
}

// switch (true) {
//   case percent >=90 && percent <= 100:
//     console.log("Sua nota é A");
//     break;
//   case percent >=80:
//     console.log("Sua nota é B");
//     break;
//   case percent >=70:
//     console.log("Sua nota é C");
//     break;
//   case percent >=60:
//     console.log("Sua nota é D");
//     break;
//   case percent >=50:
//     console.log("Sua nota é E");
//     break;
//   case percent <=50 && percent >= 0:
//     console.log("Sua nota é E");
//     break;

//   default:
//     console.log("Error");
//     break;
// }