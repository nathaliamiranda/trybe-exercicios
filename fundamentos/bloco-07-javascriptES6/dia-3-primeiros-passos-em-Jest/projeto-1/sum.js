function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}


function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(vogaisEmNumeros) {
  vogaisEmNumeros = vogaisEmNumeros.replace(/a/g, '1');
  vogaisEmNumeros = vogaisEmNumeros.replace(/e/g, '2');
  vogaisEmNumeros = vogaisEmNumeros.replace(/i/g, '3');
  vogaisEmNumeros = vogaisEmNumeros.replace(/o/g, '4');
  vogaisEmNumeros = vogaisEmNumeros.replace(/u/g, '5');
  return vogaisEmNumeros;
}

function decode(numeroEmVogais) {
  numeroEmVogais = numeroEmVogais.replace(/1/g, 'a');
  numeroEmVogais = numeroEmVogais.replace(/2/g, 'e');
  numeroEmVogais = numeroEmVogais.replace(/3/g, 'i');
  numeroEmVogais = numeroEmVogais.replace(/4/g, 'o');
  numeroEmVogais = numeroEmVogais.replace(/5/g, 'u');
  return numeroEmVogais;
}

function techList(techs, nome) {

  if (techs.length === 0) {
    return 'Vazio!';
  }

  let tecnologias = [];
  techs = techs.sort();
  for (let tec of techs) {
    let objeto = {
      tech: tec,
      name: nome
    };
    tecnologias.push(objeto);
  }
  return tecnologias;

}
module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList }
