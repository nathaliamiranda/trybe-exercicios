// Todos os exercícios devem ser realizados utilizando reduce , e se necessário outra HOF , a informação será citada no enunciado.
// 1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => {
  //concat() => Arrays ou valores para concatenar (unir) ao array retornado.
  return arrays.reduce((acc, arr) => acc.concat(arr), []);
}

// return arrays.reduce((acc, value) => acc.concat(value)); // outra forma de fazer.