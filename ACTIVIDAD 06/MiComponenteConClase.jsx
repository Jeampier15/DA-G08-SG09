import React, { Component } from 'react';

class MiComponenteConClase extends Component {
  constructor() {
    super();
    this.state = { contador: 0 };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.contador}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default MiComponenteConClase;
