//  Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
// exercicio feito com a mar, jonatas e nathalia
const sorteio = (numeroEscolhido) => {
  let numeroSorteado = Math.round(Math.random() * 5) 
  console.log(numeroSorteado);
  const resultado = confereNumero(numeroEscolhido, numeroSorteado);
  return resultado
  }
  
  const confereNumero = (numeroEscolhido, numero) => (numero === numeroEscolhido) ? "Parabéns você ganhou" : "Tente novamente";
  
  console.log(sorteio(5)); 