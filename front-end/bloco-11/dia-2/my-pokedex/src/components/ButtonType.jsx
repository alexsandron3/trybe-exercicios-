import React from "react";

export default class ButtonType extends React.Component {
  constructor() {
    super();
    this.pokemonsByType = this.props.value.bind(this);
  }
  render() {
    return (
      <button className="button ml-2" onClick={this.props.onclick}>
        {this.props.type || "All"}
      </button>
    );
  }
}
