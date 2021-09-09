function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
// Copiar
//exercicios discutido em grupo com Mariana e Airton
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function diaMes() {
  let chamaDays = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dia = dezDaysList[i];
    const criaLi = document.createElement('li');
    criaLi.innerText = dia;
    criaLi.className = 'day';
    chamaDays.appendChild(criaLi);
    if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
      criaLi.className = 'holiday day';
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
      criaLi.className = 'friday day';
    }
    if (dezDaysList[i] === 25) {
      criaLi.className = 'friday holiday day';
    }
  }
}
diaMes();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function button(string) {
  let chamaPai = document.querySelector('.buttons-container');
  let chamaDivFilho = document.createElement('button');
  chamaDivFilho.id = 'btn-holiday';
  chamaPai.appendChild(chamaDivFilho);
  chamaDivFilho.innerText = string;

}

button("Feriados");
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

//Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
function altera() {

let chamaDivFilho = document.querySelector('#btn-holiday');
let arrayFeriados = document.querySelectorAll('.holiday');
chamaDivFilho.addEventListener('click', function alteraCor() {
  
  for (let index = 0; index < arrayFeriados.length; index += 1) {
    if (arrayFeriados[index].style.backgroundColor === 'pink') {
      arrayFeriados[index].style.backgroundColor = 'rgb(238,238,238)';
    } else {
      arrayFeriados[index].style.backgroundColor = 'pink';
    }
  }
});
}

altera();