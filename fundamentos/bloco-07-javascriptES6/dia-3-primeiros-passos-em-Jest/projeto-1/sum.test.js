const {sum, myRemove, myFizzBuzz, encode, decode, techList} = require('./sum.js');

describe('testa a função sum', () => {
  it('deve retornar o resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('deve disparar um erro caso receba como parâmetro uma string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})


// 2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
describe('testa a função myRemove', () => {
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  it(' Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  })
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove ([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  it ('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove ([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})

// 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
describe('testa a função myFizzBuzz', () => {
  // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
 it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz (15)).toBe('fizzbuzz');
 })
 // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
 it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz (9)).toBe('fizz');
 })
 // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
 it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(25)).toBe('buzz');
 })
 // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
 it(' Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(4)).toBe(4);
 })
 // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado 
 it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () =>{
  expect(myFizzBuzz('b')).toBe(false);
 })
});

// 4- Para as funções encode e decode crie os seguintes testes em Jest:
describe('testa as funções encode e decode', () => {
  // verifica se a funcao esta definida
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  }); 
// verifica se a funcao esta definida
  it('a função encode é definida', () => {
    expect(decode).toBeDefined();
  }); 
  // Teste se encode e decode são funções;
  it('Teste se encode é função', () => {
    expect(typeof encode).toEqual('function'); 
})
  it('Teste se decode é função', () => {
    expect(typeof decode).toEqual('function');
})
  // Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a', 'e', 'i', 'o', 'u')).toBe('1', '2', '3', '4', '5');
  });
  // Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente;
  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => { 
    expect(decode('1', '2', '3', '4', '5')).toBe('a', 'e', 'i', 'o', 'u');
    // Teste se as demais letras/números não são convertidos para cada caso;
  })
  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('b, c, d, f')).toBe('b, c, d, f');
    expect(decode('b, c, d, f')).toBe('b, c, d, f');
  })
    // Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.
    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro' , () => {
        expect(encode('trybe').length).toEqual(5);
        })
});

// 5- A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});
