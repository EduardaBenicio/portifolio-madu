import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TecnologiasIcons from './TecnologiasIcons'; // Importe seu componente de ícone de tecnologia


import laravel from '../assets/image/tecnologias/laravel.svg'
import git from '../assets/image/tecnologias/git.svg'
import react from '../assets/image/tecnologias/react.svg'
import zabbix from '../assets/image/tecnologias/zabbix.svg'
import karpersky from '../assets/image/tecnologias/karpersky.svg'
import grafana from '../assets/image/tecnologias/grafana.svg'
import paloalto from '../assets/image/tecnologias/paloalto.svg'
import linux from '../assets/image/tecnologias/linux.svg'
import proxmox from '../assets/image/tecnologias/proxmox.svg'



const TecnologiasContainer = () => {

  const total = 9;

  const settings = {
    infinite: false,                  // só infinito se passar de 8
    speed: 500,
    slidesToShow: Math.min(8, total),     // nunca mais que o total
    slidesToScroll: Math.min(8, total),
    initialSlide: 0,
    arrows: total > 8,                    // setas só se precisar
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
        }
      },
      {
          breakpoint: 600,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
          slidesToShow: 4,
          slidesToScroll: 4
          }
      }
    ],
  };

  return (


    <Slider className="tecnologias" {...settings}>
        <TecnologiasIcons imagem={laravel} />
        <TecnologiasIcons imagem={react} />
        <TecnologiasIcons imagem={git} />

        <TecnologiasIcons imagem={grafana} />
        <TecnologiasIcons imagem={zabbix} />
        <TecnologiasIcons imagem={paloalto} />
        <TecnologiasIcons imagem={karpersky} />
        
        <TecnologiasIcons imagem={linux} />
        <TecnologiasIcons imagem={proxmox} />
        
    </Slider>



  );
};

export default TecnologiasContainer;