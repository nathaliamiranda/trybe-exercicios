import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */


class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickTree = this.handleClickTree.bind(this) 
  }

   handleClick() {
     console.log(this)
    console.log('Clicou no botão!')
  }
   handleClickTwo() {
     console.log(this)
    console.log('Clique aqui!')
  }
   handleClickTree() {
     console.log(this);
    console.log('Clique!')
  }

  render() {
    return (
    <div>
     <button onClick={this.handleClick}>Meu botão</button>
     <button onClick={this.handleClickTwo}>Meu botão 2</button>
     <button onClick={this.handleClickTree}>Meu botão 3</button>
    </div>
    );
  }
}

export default App;

