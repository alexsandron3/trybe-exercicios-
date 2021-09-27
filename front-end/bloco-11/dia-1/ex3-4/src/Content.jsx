import React, {Component} from "react";
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];
export class Content extends Component {
  render() {
    return (
      <ol key="conteudos">
      {conteudos.map(({conteudo, bloco, status}) => {
        return (
          <>
            <li>
              O conteúdo é: {conteudo} <br/>
              Status: {status} <br/>
              Bloco: {bloco}  
            </li>
          </>
          )
        })}
      </ol>
    );
  }
}