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