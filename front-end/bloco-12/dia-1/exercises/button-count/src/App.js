import "./App.css";
import React from "react";
class App extends React.Component {
  handleClick1(message) {
    this.setState(
      (previousState, _props) => ({
        nCliquesBtn1: previousState.nCliquesBtn1 + 1,
      }),
      () => {
        console.log(`${message} ${this.isEven(this.state.nCliquesBtn1)}`);
      }
    );
  }
  handleClick2(message) {
    console.log(message);
    this.setState((previousState, _props) => ({
      nCliquesBtn2: previousState.nCliquesBtn2 + 1,
    }));
  }
  handleClick3(message) {
    this.setState((previousState, props) => {
      return {
        nCliquesBtn3: previousState.nCliquesBtn3 + 1,
      };
    });
  }
  isEven(number) {
    return number % 2 === 0 && number !== 0 ? "green" : "white";
  }
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      nCliquesBtn1: 0,
      nCliquesBtn2: 0,
      nCliquesBtn3: 0,
    };
  }
  render() {
    const { nCliquesBtn1, nCliquesBtn2, nCliquesBtn3 } = this.state;
    return (
      <>
        <button
          onClick={() => this.handleClick1("Primeiro botão")}
          style={{ backgroundColor: this.isEven(nCliquesBtn1) }}
        >
          Primeiro botão | {nCliquesBtn1}
        </button>
        <button
          onClick={() => this.handleClick2("Segundo botão")}
          style={{ backgroundColor: this.isEven(nCliquesBtn2) }}
        >
          Segundo Botão | {nCliquesBtn2}
        </button>
        <button
          onClick={() => this.handleClick3("Terceiro botão")}
          style={{ backgroundColor: this.isEven(nCliquesBtn3) }}
        >
          Terceiro Botão| {nCliquesBtn3}
        </button>
      </>
    );
  }
}
export default App;
