// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   console.log(fetch(url));
// }

// fetchJoke();

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value));
// }

// fetchJoke();

// Vamos ver o que acontece no código acima. A função fetchJoke chama o fetch que é executado e após sua execução, caso a requisição seja bem sucedida, retorna para o parâmetro da função do primeiro .then() uma resposta e na sua execução iremos pegar a versão JSON dessa resposta por meio da função .json() . Note que a função .json() também é assíncrona, por isso temos o segundo .then() que, por sua vez, vai pegar o JSON vindo do primeiro .then() e dentro dele acessar o elogio que esta armazenado no campo value para mostrar no console.

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// }

// fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported

// const fetch = require('node-fetch');

// const fetchJoke = async () => {
//   const url = 'https://api.chucknorris.io/jokes/random?category=dev';

//   const result = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
  
//   return result;
// }

// fetchJoke();

// // Chuck Norris can write multi-threaded applications with a single thread.

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.