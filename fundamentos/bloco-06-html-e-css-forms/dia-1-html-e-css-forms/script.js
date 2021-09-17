// 1
function criaOpcions() {
  let estadosDoBrasil = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  const localizaSelect = document.querySelector('#estado');
  for (var i = 0; i < estadosDoBrasil.length; i += 1) {
    let estado = document.createElement('option');
    localizaSelect.appendChild(estado).innerText = estadosDoBrasil[i];
    localizaSelect.appendChild(estado).value = estadosDoBrasil[i];
  }
}
criaOpcions();

// 2 O dia deve ser > 0 e <= 31.O mês deve ser > 0 e <= 12. O ano não pode ser negativo.
// Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
// Campo obrigatório
// feito com a mari, com a ajuda do monitor Rod e israel
function validarData() {
  let inputValueData = document.querySelector('#datepicker').value;
  console.log(inputValueData);
  if (inputValueData === '') {
    return alert('Preencher a data');
  }
  let pedacoInput = inputValueData.split('/');
  let dia = pedacoInput[0];
  let mes = pedacoInput[1];
  let ano = pedacoInput[2];
  if (dia < 1 || dia > 31) {
    return alert('Erro no dia');
  }
  if (mes < 1 || mes > 12) {
    return alert('Erro no mês');
  }
  if (ano < 1) {
    return alert('Erro no ano');
  }
  return true;
}

// parte 3
let bodyPai = document.querySelector('body');
let divContainer = document.createElement('div');
divContainer.className = 'div-elementos';
bodyPai.appendChild(divContainer);

let nome = document.getElementById('name');
let email = document.getElementById('email');
let cpf = document.getElementById('cpf');
let endereco = document.getElementById('endereco');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('estado');
let cargo = document.getElementById('cargo');
let descricao = document.getElementById('descricao');
let data = document.getElementById('data');


function enviarEventoButton(event) {
  // event.preventDefault();
  if (validarData()) {
    // usar o atraves da tagName name para pegar o item em comum
    let residencia = document.getElementsByName('reside');
    let valorMarcadoLocadouro = "";
    for (let i = 0; i < residencia.length; i += 1) {
      if (residencia[i].checked) {
        valorMarcadoLocadouro = residencia[i].value;
      }
    }

    let arr = [nome, email, cpf, endereco, cidade, estado, cargo, descricao, data];
    let retornoElementoArray = '';
    for (let index = 0; index < arr.length; index += 1) {
      retornoElementoArray += arr[index].value;
    }

    divContainer.innerHTML = valorMarcadoLocadouro + retornoElementoArray;
  }
}

function limparButton() {
  let bodyPai = document.querySelector('body');
  bodyPai.removeChild(divContainer);
}



window.onload = function () {
  criaOpcions();
  let buttonEnviar = document.querySelector('#enviar');
  buttonEnviar.addEventListener('click', enviarEventoButton);

  let buttonApagar = document.querySelector('#apagar');
  buttonApagar.addEventListener('click', limparButton);
}

// parse(dateString, format = 'YYYY-MM-DD')

// let picker = new Pikaday({
//     field: document.getElementById('datepicker'),
//     format: 'D/M/YYYY',
//     toString(date, format) {
//         // you should do formatting based on the passed format,
//         // but we will just return 'D/M/YYYY' for simplicity
//         const day = date.getDate();
//         const month = date.getMonth() + 1;
//         const year = date.getFullYear();
//         return `${day}/${month}/${year}`;
//     },
//     parse(dateString, format) {
//         // dateString is the result of `toString` method
//         const parts = dateString.split('/');
//         const day = parseInt(parts[0], 10);
//         const month = parseInt(parts[1], 10) - 1;
//         const year = parseInt(parts[2], 10);
//         return new Date(year, month, day);
//     }
// });