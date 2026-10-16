import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import perfil from './assets/image/foto.svg'
import github from './assets/image/logo-github.svg'
import linkedin from './assets/image/logo-linkedin.svg'
import vitrine from './assets/image/facilita-projeto.svg'
import appIntel from './assets/image/intel-projeto.svg'
import ecf from './assets/image/ecf.svg'
import sejd from './assets/image/sejd.svg'
import cajukiosk from './assets/image/cajukiosk.svg'
import Projetos from './components/Projetos'
import TecnologiasContainer from './components/TecnologiasContainer'
import MonitoramentoContainer from './components/MonitoramentoContainer'

const textVitrine = `O projeto voltado a disponibilizar estabelecimentos e prestadores de
                      serviços em forma de vitrine digital, a fim de expor seus produtos e/ou serviços
                      oferecidos.`;

const textAppIntel = `Aplicativo da central do assinante da provedora de internet
                      Telecom desenvolvido com React Native`;

const textECF = `Software voltado para gerencia de uma escolinha de futebol. Com gerencia de unidades, turmas, categorias, esportes, matriculas e mensalidades.`;
const textSejd = `Software de projeção de carga horaria docente para auxiliar em tomadas de decisão.`;
const textCajuKiosk = `Sistema de autoatendimento e gerenciamento de pedidos desenvolvido para lanchonetes, restaurantes, sorveterias e outros estabelecimentos do ramo alimentício, com o objetivo de otimizar o atendimento e facilitar o gerenciamento dos pedidos.`;

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
              <span className="profissao-apresentacao">TÉCNICA DE TI · DESENVOLVEDORA DE SISTEMAS</span>
              <span className="texto-apresentacao">
                Formada em <b>Tecnologia Em Análise e Desenvolvimento de Sistemas</b> com especialização em <b>Docência em Ciência e Tecnologia da Informação</b>. 
                Hoje, atuo como <b>Técnica de Tecnologia da Informação</b> no IFRN, com experiência em infraestrutura, suporte técnico, administração de sistemas e desenvolvimento de aplicações.
              </span>
              <div className="redes">

                <a href="https://github.com/EduardaBenicio" target="_blank"><img src={github} /></a>
                <a href="https://www.linkedin.com/in/eduarda-benicio" target="_blank"><img src={linkedin} /></a>
              </div>
            </div>
          </div>
          <div className="tecnologias-conteiner">
            <h2 className="tecnologias-titulo">STACKS</h2>
            <TecnologiasContainer />
          </div>
         
        </section>
        <section className="sessao-projetos" id='sessao_projetos'>
          <div className="projetos-conteiner">
            <h2>PROJETOS</h2>
            <div className="projetos">
              <Projetos titulo="Sistema de Estimativa de Jornada Docente - SEJD" img={sejd} texto={textSejd} nome="SEJD" link="https://sejd.spp.ifrn.edu.br/"/>
              <Projetos titulo="Escolinha Craques do Futuro" img={ecf} texto={textECF} nome="ECF" link="https://www.escolinhacraquesdofuturo.com.br" />
              <Projetos titulo="CajuKiosk" img={cajukiosk} texto={textCajuKiosk} nome="CajuKiosk" link="#sessao_projetos" />
            </div>
            <div className='projetos'>
              <Projetos titulo="App Intelnet Telecom" img={appIntel} texto={textAppIntel} nome="PlayStore" link="https://play.google.com/store/apps/details?id=com.devintelnet.intelnet&pcampaignid=web_share" />
              <Projetos titulo="Facilita Agreste" img={vitrine} texto={textVitrine} nome="Facilita Agreste" link="#sessao_projetos" />
            </div>
            
          </div>
        </section>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))