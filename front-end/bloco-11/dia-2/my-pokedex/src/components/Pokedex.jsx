import Pokemon from "./Pokemon";
import React from "react";
import data from "../data";
import ButtonType from "./ButtonType";
export default class Pokedex extends React.Component {
  constructor() {
    super();
    this.types = [
      "All",
      ...new Set(data.map((pokemon) => pokemon.type)),
    ].sort();
    this.state = {
      pokemonsTypes: data,
      position: 0,
    };
    this.nextPokemon = this.nextPokemon.bind(this);
    this.pokemonsByType = this.pokemonsByType.bind(this);
  }
  nextPokemon() {
    const { pokemonsTypes } = this.state;
    this.setState((previousState, _props) => {
      const { position } = previousState;
      const indexAtual =
        position === pokemonsTypes.length - 1 ? 0 : position + 1;
      return { ...previousState, position: indexAtual };
    });
  }
  pokemonsByType(event) {
    console.log("op");
    const currentType = event.target.id;
    const filteredPokemons = data.filter(
      (pokemon) => pokemon.type === currentType
    );
    currentType !== "All"
      ? this.setState(() => ({
          position: 0,
          pokemonsTypes: filteredPokemons,
        }))
      : this.setState(() => ({
          position: 0,
          pokemonsTypes: data,
        }));
  }
  render() {
    return (
      <>
        <div className="container">
          <h1 className="has-text-centered is-size-1">Pokedex</h1>
          <div className="columns is-multiline is-centered ">
            <Pokemon Pokemon={this.state.pokemonsTypes[this.state.position]} />
          </div>
        </div>
        <div className="column has-text-centered is-grouped">
          {this.types.map((type) => (
            <ButtonType type={type} key={type} value={1} />

            // <button
            //   className="button ml-2"
            //   key={type}
            //   id={type}
            //   onClick={this.pokemonsByType}
            // >
            //   {type}
            // </button>
          ))}
        </div>
        <div className="column has-text-centered">
          <button className="button" onClick={this.nextPokemon}>
            Next Pokemon!
          </button>
        </div>
      </>
    );
  }
}
