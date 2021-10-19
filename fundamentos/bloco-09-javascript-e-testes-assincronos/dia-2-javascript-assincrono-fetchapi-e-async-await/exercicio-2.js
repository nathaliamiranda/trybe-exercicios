const API_URL = 'https://api.coincap.io/v2/assets';
console.log(API_URL);

function getCoins() {
  return fetch(API_URL) //promise
    .then(response => response.json()) //transforma em notação js (retorna promise)
    .then(data => data)// trata a promise
    .catch(error => console.log(error));//captura o erro
}
async function nome() {
  const {data} = await getCoins();
  const coins = document.getElementById('crypto-list')
  data.filter((_, i) => i<10).forEach((coin) => {
    const li = document.createElement('li');
    li.innerText = `${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`
    coins.appendChild(li)
  });
}
nome();
