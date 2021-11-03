import React from 'react';
import './App.css';

// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
// 4 - Garanta acesso ao objeto this na função que você declarou.
// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
// 6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.
// 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!
// 8 - Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
// 9 - A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!
// 🦜 Dica: Lembre-se de substituir a referência à função, no evento, por uma callback que invoca!



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    };
    

    this.handleClick = this.handleClick.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickTree = this.handleClickTree.bind(this); 
  }

   handleClick() {
     this.setState((estadoAnterior, _props) => ({numeroDeCliques1: estadoAnterior.numeroDeCliques1 +1 }))
     console.log(this)
    console.log('Clicou no botão!')
  }
   handleClickTwo() {
     this.setState((estadoAnterior, _props) => ({numeroDeCliques2: estadoAnterior.numeroDeCliques2 +1}))
     console.log(this)
    console.log('Clique aqui!')
  }
   handleClickTree() {
     this.setState((estadoAnterior, _props) => ({numeroDeCliques3: estadoAnterior.numeroDeCliques3 +1}))
     console.log(this);
    console.log('Clique!')
  }

      // Para essa função, não precisamos utilizar o bind porque ela é utilizada
    // apenas dentro do contexto do componente App
    getButtonColor(number) {
      return number % 2 === 0 ? 'green' : 'white';
    }

//   render() {
//     return (
//     <div>
//      <button onClick={this.handleClick}>Botão 1 | Count = {this.state.numeroDeCliques1}</button>
//      <button onClick={this.handleClickTwo}>Botão 2 | Count = {this.state.numeroDeCliques2}</button>
//      <button onClick={this.handleClickTree}>Botão 3 | Count = {this.state.numeroDeCliques3}</button>
//     </div>
//     );
//   }
// }

render() {
  const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;
  return (
  <div>
   <button onClick={this.handleClick} style={{ backgroundColor: this.getButtonColor(numeroDeCliques1)}}>Botão 1 | Count = { numeroDeCliques1 }</button>
   <button onClick={this.handleClickTwo} style={{ backgroundColor: this.getButtonColor(numeroDeCliques2)}}>Botão 2 | Count = { numeroDeCliques2 }</button>
   <button onClick={this.handleClickTree} style={{ backgroundColor: this.getButtonColor(numeroDeCliques3)}}>Botão 3 | Count = { numeroDeCliques3 }</button>
  </div>
  );
}
}
export default App;

