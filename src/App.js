import React from 'react'
import perfil from './assets/image/foto.svg'
import github from './assets/image/logo-github.svg'
import linkedin from './assets/image/logo-linkedin.svg'
import Projetos from './components/Projetos'
import TecnologiasContainer from './components/TecnologiasContainer'
import projetos from './data/projetos'

const PROJETOS_POR_LINHA = 3

// Divide a lista em linhas de PROJETOS_POR_LINHA cards.
const linhasDeProjetos = Array.from(
  { length: Math.ceil(projetos.length / PROJETOS_POR_LINHA) },
  (_, i) => projetos.slice(i * PROJETOS_POR_LINHA, (i + 1) * PROJETOS_POR_LINHA)
)

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <div>
          <a href="#sessao_apresentacao">Sobre mim</a>
          <a href="#sessao_projetos">Projetos</a>
        </div>
      </nav>
      <section className="sessao-apresentacao" id="sessao_apresentacao">
        <div className="dados-apresentacao">
          <div>
            <img className="foto-apresentacao" src={perfil} alt="Foto da Autora" />
          </div>
          <div className="informacoes-apresentacao">
            <h1 className="nome-apresentacao">MARIA EDUARDA BENíCIO</h1>
            <span className="profissao-apresentacao">TÉCNICA DE TI · DESENVOLVEDORA DE SISTEMAS</span>
            <span className="texto-apresentacao">
              Formada em <b>Tecnologia Em Análise e Desenvolvimento de Sistemas</b> com especialização em <b>Docência em Ciência e Tecnologia da Informação</b>.
              Hoje, atuo como <b>Técnica de Tecnologia da Informação</b> no IFRN, com experiência em infraestrutura, suporte técnico, administração de sistemas e desenvolvimento de aplicações.
            </span>
            <div className="redes">
              <a href="https://github.com/EduardaBenicio" target="_blank" rel="noreferrer" aria-label="GitHub">
                <img src={github} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/eduarda-benicio" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <img src={linkedin} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="tecnologias-conteiner">
          <h2 className="tecnologias-titulo">STACKS</h2>
          <TecnologiasContainer />
        </div>
      </section>
      <section className="sessao-projetos" id="sessao_projetos">
        <div className="projetos-conteiner">
          <h2>PROJETOS</h2>
          {linhasDeProjetos.map((linha, i) => (
            <div className="projetos" key={i}>
              {linha.map((projeto) => (
                <Projetos key={projeto.titulo} {...projeto} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
