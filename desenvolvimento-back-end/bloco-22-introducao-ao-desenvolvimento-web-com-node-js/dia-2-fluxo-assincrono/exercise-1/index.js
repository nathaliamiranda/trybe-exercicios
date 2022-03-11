function doMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
        reject('Informe apenas números');
    
    const result = (a + b) * c;
    
    if (result < 50) {
      return reject('Valor muito baixo');
}
      resolve(result);
});
    
  }

  doMath(15, 20, 30)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(1, 'a', 'b')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

doMath(1, 2, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}
function callDoMath() {
  const randomNumbers = Array.from({ length: 3 }).map(randomNumber);
  doMath(...randomNumbers)
    .then(result => console.log(result))
    .catch(err => console.error(err.message))
  }