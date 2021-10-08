// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


function containsA() {
  const allAs = names.reduce((acumulado, nome) => 
  acumulado + nome.split('').reduce((acc, caracter) => {
  if (caracter === 'a' || caracter ==='A'){
  return acc += 1;
  }
  return acc;
  }, 0), 0);
  
  return allAs;
  }
  
  console.log(containsA()); 