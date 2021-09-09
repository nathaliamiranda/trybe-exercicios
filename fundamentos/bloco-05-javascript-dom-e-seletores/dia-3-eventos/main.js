const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function adicionaTech(event){
let chamaTech = document.querySelector('.tech');
chamaTech.classList.remove('tech');
event.target.classList.add('tech');
input.value = "";
}
firstLi.addEventListener('click', adicionaTech);
secondLi.addEventListener('click', adicionaTech);
thirdLi.addEventListener('click', adicionaTech);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function alteraTexto(event){
let chamaTech2 = document.querySelector('.tech');
chamaTech2.innerHTML = event.target.value;
}
input.addEventListener('input', alteraTexto);


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function redirecionar(){
window.location.replace('https://developer.mozilla.org/pt-BR/docs/Web/Events');
}
myWebpage.addEventListener('dblclick', redirecionar);
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function alteraCor(){
  myWebpage.style.color='pink';
} 

myWebpage.addEventListener('mouseover', alteraCor);
function alteraCor2(){
myWebpage.style.color='black';  
}
myWebpage.addEventListener('mouseout', alteraCor2);