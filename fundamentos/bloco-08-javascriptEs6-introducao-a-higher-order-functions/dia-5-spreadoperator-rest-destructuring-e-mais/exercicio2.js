// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .
const sum = (...args) => args.reduce((acc, number) =>  acc + number, 0);
console.log(sum(1,2,3));

