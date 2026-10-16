import sejd from '../assets/image/sejd.svg'
import ecf from '../assets/image/ecf.svg'
import cajukiosk from '../assets/image/cajukiosk.svg'
import appIntel from '../assets/image/intel-projeto.svg'
import vitrine from '../assets/image/facilita-projeto.svg'

// `link` é opcional: sem ele o card mostra "Em breve" no lugar do botão.
const projetos = [
  {
    titulo: 'Sistema de Estimativa de Jornada Docente - SEJD',
    img: sejd,
    texto: 'Software de projeção de carga horaria docente para auxiliar em tomadas de decisão.',
    nome: 'SEJD',
    link: 'https://sejd.spp.ifrn.edu.br/',
  },
  {
    titulo: 'Escolinha Craques do Futuro',
    img: ecf,
    texto: 'Software voltado para gerencia de uma escolinha de futebol. Com gerencia de unidades, turmas, categorias, esportes, matriculas e mensalidades.',
    nome: 'ECF',
    link: 'https://www.escolinhacraquesdofuturo.com.br',
  },
  {
    titulo: 'CajuKiosk',
    img: cajukiosk,
    texto: 'Sistema de autoatendimento e gerenciamento de pedidos desenvolvido para lanchonetes, restaurantes, sorveterias e outros estabelecimentos do ramo alimentício, com o objetivo de otimizar o atendimento e facilitar o gerenciamento dos pedidos.',
    nome: 'CajuKiosk',
  },
  {
    titulo: 'App Intelnet Telecom',
    img: appIntel,
    texto: 'Aplicativo da central do assinante da provedora de internet Telecom desenvolvido com React Native',
    nome: 'PlayStore',
    link: 'https://play.google.com/store/apps/details?id=com.devintelnet.intelnet&pcampaignid=web_share',
  },
  {
    titulo: 'Facilita Agreste',
    img: vitrine,
    texto: 'O projeto voltado a disponibilizar estabelecimentos e prestadores de serviços em forma de vitrine digital, a fim de expor seus produtos e/ou serviços oferecidos.',
    nome: 'Facilita Agreste',
  },
]

export default projetos
