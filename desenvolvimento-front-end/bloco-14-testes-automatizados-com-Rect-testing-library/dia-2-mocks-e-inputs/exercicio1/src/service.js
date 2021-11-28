const randomNumber = () => Math.floor(Math.random() * 100);

const upperCase = (string) => string.toUpperCase();
const firstLetra = (string) => string.charAt(0);
const concatString = (string1, string2 ) => string1.concat(string2);


module.exports = { 
  randomNumber, 
  upperCase, 
  firstLetra, 
  concatString 
};


