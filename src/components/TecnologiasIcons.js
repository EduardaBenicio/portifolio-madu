import React from 'react'

export default function TecnologiasIcons({ imagem, nome }) {
    return (
        <div className="tecnologias-link" title={nome}>
            <img className="tecnologias-icons" src={imagem} alt={nome} />
        </div>
    )
}
