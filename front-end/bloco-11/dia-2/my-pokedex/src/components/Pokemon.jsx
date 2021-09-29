import React, { Component } from "react";
import propTypes from "prop-types";
export class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.Pokemon;
    const { value, measurementUnit } = averageWeight;
    const weight = `${value} ${measurementUnit}`;
    return (
      <div className="column is-4 ml-3">
        <div className="card has-text-centered">
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={image} alt={`${name} gif`} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{name}</p>
                <a href={moreInfo}> Mais informções</a>
              </div>
            </div>
            <div className="content">
              <p className="subtitle is-6">Average weight: {weight} </p>
              <p className="subtitle is-6">Type: {type} </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Pokemon.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  weight: propTypes.string,
  image: propTypes.string,
};
