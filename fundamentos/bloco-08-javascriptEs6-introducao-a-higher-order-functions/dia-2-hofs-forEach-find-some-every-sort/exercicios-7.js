const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
// feito com a mari
const expectedResult = false;
const authorUnique = () => {
  let arrayAnoNascimento = [];
  books.forEach((book) => {
  arrayAnoNascimento.push(book.author.birthYear);
  })
  
  const arryOrdenado = arrayAnoNascimento.sort((a, b) => a-b);
 
  let arrayIgual = 0;
  
  let resultado = true;
  arryOrdenado.forEach((ano) => {
  
  if (arrayIgual === ano) {
  resultado = false;
  }
  arrayIgual = ano
  })
  return resultado;
  
  }
  
  // books.map((val) => val.author.birthYear).length === [...new Set(books.map((val) => val.author.birthYear))].length 

assert.strictEqual(authorUnique(), expectedResult);