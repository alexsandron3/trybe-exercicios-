import React, {Component} from "react";
import { Content } from './Content';
export class Header extends Component {
  render() {
    return (
      <>
        <h1> Conteúdos de Front-End</h1>
        <Content />
      </>
    );
  }
}