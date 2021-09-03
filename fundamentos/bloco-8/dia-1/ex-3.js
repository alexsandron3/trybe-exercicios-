// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const correctAnswers = (template, answers, func) => {
  return func(template, answers);
};

const verifyAnswers = (template, answers) => {
  let points = 0;
  for (let i = 0; i < template.length; i += 1) {

    if (template[i] === answers[i]) {
      points += 1
    }else if ( answers[i] !== 'N.A') {
      points -= 0.5
    }
  }
  return points;

}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(correctAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));