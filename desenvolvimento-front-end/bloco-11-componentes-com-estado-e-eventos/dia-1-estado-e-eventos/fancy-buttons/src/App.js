import React from 'react';
import './App.css';

// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
// 4 - Garanta acesso ao objeto this na função que você declarou.
// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
// 6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.
// 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!



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

  render() {
    return (
    <div>
     <button onClick={this.handleClick}>{this.state.numeroDeCliques1}</button>
     <button onClick={this.handleClickTwo}>{this.state.numeroDeCliques2}</button>
     <button onClick={this.handleClickTree}>{this.state.numeroDeCliques3}</button>
    </div>
    );
  }
}

export default App;

