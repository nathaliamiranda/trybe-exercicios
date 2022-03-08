const readline = require('readline-sync');

function calculaImc () {
  const peso = readline.questionFloat('Qual o seu peso? (em kg)');
  const altura = readline.questionInt('Qual a sua altura? (em cm)');

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`);
}

calculaImc();