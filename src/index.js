import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import perfil from './assets/image/foto.svg'
import github from './assets/image/logo-github.svg'
import linkedin from './assets/image/logo-linkedin.svg'
import vitrine from './assets/image/facilita-projeto.svg'
import appIntel from './assets/image/intel-projeto.svg'
import Projetos from './components/Projetos'
import TecnologiasContainer from './components/TecnologiasContainer'

const textVitrine = `O projeto voltado a disponibilizar estabelecimentos e prestadores de
                      serviços em forma de vitrine digital, a fim de expor seus produtos e/ou serviços
                      oferecidos.`;

const textAppIntel = `É um aplicativo da central do assinate da provedora de internet
                      Telecom desenvolvido com React Native`;

class App extends Component {

  render() {
    return (
      <div>
        <div className="navbar">
          <div>
            <a href="#sessao_apresentacao">Sobre mim</a>
            <a href="#sessao_projetos">Projetos</a>
          </div>
        </div>
        <section className="sessao-apresentacao" id='sessao_apresentacao'>
          <div className="dados-apresentacao">
            <div>
              <img className="foto-apresentacao" src={perfil} />
            </div>
            <div className="informacoes-apresentacao">
              <span className="nome-apresentacao">MARIA EDUARDA BENíCIO</span>
              <span className="profissao-apresentacao">DESENVOLVEDORA FULLSTACK & MOBILE</span>
              <span className="texto-apresentacao">
                Lorem ipsum dolor sit amet consectetur. Turpis euismod egestas scelerisque elementum lobortis. Volutpat aenean vivamus pharetra mi.
              </span>
              <div className="redes">

                <a href="#"><img src={github} /></a>
                <a href="#"><img src={linkedin} /></a>
              </div>
            </div>
          </div>
          <div
            className="tecnologias-conteiner"
          >

            <TecnologiasContainer />

          </div>



        </section>
        <section className="sessao-projetos" id='sessao_projetos'>
          <div className="projetos-conteiner">
            <h2>PROJETOS</h2>
            <div className="projetos">
              <Projetos titulo="Facilita Agreste" img={vitrine} texto={textVitrine} link="Link" />
              <Projetos titulo="App Intelnet Telecom" img={appIntel} texto={textAppIntel} link="PlayStore" />
            </div>
            <div className='projetos'>
              <Projetos titulo="Gerenciamento de Ordem de Serviços" img={vitrine} texto={textVitrine} link="Link" />
              <Projetos titulo="Gerenciamento de boletos" img={appIntel} texto={textAppIntel} link="PlayStore" />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))