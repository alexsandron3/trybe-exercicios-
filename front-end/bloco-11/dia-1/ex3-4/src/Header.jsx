import React, {Component} from "react";
import { Content } from './Content';
export class Header extends Component {
  render() {
    return (
      <div className="card">
        <h1 className="has-text-centered card-header-title"> Conteúdos de Front-End</h1>
        <Content />
      </div>
    );
  }
}