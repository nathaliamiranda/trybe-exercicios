const peca = "CAVALO";
switch (peca.toLowerCase()) {
 case 'rei': 
    console.log('Rei - anda só em uma direção e apenas uma casa')
    break;
 case 'rainha': 
 console.log('Diagonal, horizontal e vertical')
 break;
 case 'torre':
    console.log('Torre - Horizontal e vertical.');
    break;
 case 'bispo':
    console.log('Bispo - Diagonal.');
    break;
    case 'peão':
    console.log("Peão - Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  case 'cavalo':
    console.log('Cavalo - anda em "L" podendo pular as peças');
    break
  default:
    console.log('Erro, peça inválida!');
    break;
}



