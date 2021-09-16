// 1
function criaOpcions(){
    let estadosDoBrasil = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    const localizaSelect = document.querySelector('#estado');
    for (var i = 0; i < estadosDoBrasil.length; i += 1) {
        let estado = document.createElement('option');
        localizaSelect.appendChild(estado).innerText = estadosDoBrasil[i];
        localizaSelect.appendChild(estado).value = estadosDoBrasil[i];
    }
}
criaOpcions();

// 2
// O dia deve ser > 0 e <= 31.
// O mês deve ser > 0 e <= 12.
// O ano não pode ser negativo.
// Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
// Campo obrigatório
// feito com a mari com a ajuda do monitor RoD
function validarData() {
  let inputValueData = document.querySelector('#data').value;
  if (inputValueData === '') {
    return alert('Preenher a data');
  }
  let pedacoInput = inputValueData.split('/');
  let dia = pedacoInput[0];
  let mes = pedacoInput[1];
  let ano = pedacoInput[2];
  if (pedacoInput[0] < 0 && pedacoInput[0] > 31) {
    return alert('Erro no dia');
  }
  if (pedacoInput[1] < 0 && pedacoInput[1] > 12) {
    return alert('Erro no dia');
  }
  if (pedacoInput[2] < 0) {
    return alert('Erro no dia');
  }
  // return `${dia}/${mes}/${ano}`;
  return true;
}

let bodyPai = document.querySelector('body');
let divContainer = document.createElement('div');
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
  event.preventDefault();
  if (validarData()) {
    // usar o atraves da tagName name para pegar o item em comum
    let residencia = document.getElementsByName('reside');
    let valorMarcadoLocadouro = "";
    for (let i = 0; i < residencia.length; i += 1) {
      if (logadouro[i].checked) {
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
  // clear fields
}


window.onload = function () {
  criarEstados();
  let buttonEnviar = document.querySelector('#enviar');
  buttonEnviar.addEventListener('click', enviarEventoButton);

  let buttonApagar = document.querySelector('#apagar');
  buttonApagar.addEventListener('click', limparButton)
}