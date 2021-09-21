const rdn = async ()  =>  {
  const promise = new Promise((resolve, reject) => {
    const randomNumber = parseInt((Math.random() * 50) +1);
    const randomNumberQuad = Math.pow(randomNumber, 2);
    const numbers = [];
    for (let index = 0; index <= 10; index += 1) {
      numbers.push(randomNumberQuad);
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0)
    sum < 8000 ? resolve(sum) : reject()
  })
  promise
    .then((sumNumber) => {
      const divided = [sumNumber/2, sumNumber/3, sumNumber/5, sumNumber/10];
      return divided;
    })
    .then((numbers) => {
      console.log(numbers.reduce((acc, curr) => acc + curr,0))
    })
    .catch((err) => console.log(err))
}















// const rdn = async() => {
//   return new Promise((resolve, reject) => {
//     const randomNumber = parseInt((Math.random() * 50) +1);
//     const randomNumberQuad = Math.pow(randomNumber, 2);
//     const numbers = [];
//     for (let index = 0; index <= 10; index += 1) {
//       numbers.push(randomNumberQuad);
//     }
//     const sum = numbers.reduce((acc, curr) => acc + curr, 0)
//     if(sum < 8000) {
//       resolve(sum);
//     } else {
//       reject('É mais de oito mil! Essa promise deve estar quebrada!');
//     }
//   })
// }

//  const ops = async() => {
//   try{
//     await rdn()
//     .then((sumNumber) => {
//       const divided = [sumNumber/2, sumNumber/3, sumNumber/5, sumNumber/10];
//       return divided;
//     })
//     .then((numbers) => {
//       console.log(numbers.reduce((acc, curr) => acc + curr,0))
//     })
//   }catch (err){
//     console.log(err);
//   }
// }
// ops()


