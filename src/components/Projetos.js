import React, { Component } from 'react'
export default class Projetos extends Component {
    render() {
        return <div className="projeto-item">
            <span>{this.props.titulo}</span>
            <img src={this.props.img} />
            <p>
                {this.props.texto}
            </p>
            <a href="" target="_blank">
                {this.props.link}
            </a>
        </div>;
    }
}

