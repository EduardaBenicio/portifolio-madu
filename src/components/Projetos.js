import React, { Component } from 'react'
export default class Projetos extends Component {
    render() {
        return <div className="projeto-item">
            <span>{this.props.titulo}</span>
            <img src={this.props.img} alt="Imagem do projeto" />
            <p>
                {this.props.texto}
            </p>
            <a
                href={this.props.link}
                target={this.props.link !== "#sessao_projetos" ? "_blank" : undefined}
                rel={this.props.link !== "#sessao_projetos" ? "noopener noreferrer" : undefined}
            >
                {this.props.nome}
            </a>
        </div>;
    }
}

