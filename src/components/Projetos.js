import React from 'react'

export default function Projetos({ titulo, img, texto, nome, link }) {
    const externo = link?.startsWith('http')

    return (
        <div className="projeto-item">
            <h3>{titulo}</h3>
            <img src={img} alt={`Imagem do projeto ${titulo}`} />
            <p>{texto}</p>
            {link ? (
                <a
                    href={link}
                    target={externo ? '_blank' : undefined}
                    rel={externo ? 'noopener noreferrer' : undefined}
                >
                    {nome}
                </a>
            ) : (
                <span className="projeto-em-breve">Em breve</span>
            )}
        </div>
    )
}
