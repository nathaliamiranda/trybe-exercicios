const randomNumber = () => Math.floor(Math.random() * 100);

const upperCase = (string) => string.toUpperCase();
const firstLetra = (string) => string.charAt(0);
const concatString = (string1, string2 ) => string1.concat(string2);

const dogsAPI = () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json()
    .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json)
    )
);
};

module.exports = { 
  randomNumber, 
  upperCase, 
  firstLetra, 
  concatString,
  dogsAPI,
};


