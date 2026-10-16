import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TecnologiasIcons from './TecnologiasIcons'; // Importe seu componente de ícone de tecnologia


import zabbix from '../assets/image/tecnologias/zabbix.svg'
import karpersky from '../assets/image/tecnologias/karpersky.svg'
import grafana from '../assets/image/tecnologias/grafana.svg'
import paloalto from '../assets/image/tecnologias/paloalto.svg'


const MonitoramentoContainer = ({ tecnologiasIcons }) => {
    const total = 4;
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: total,
        slidesToScroll: 0,
        initialSlide: 0,
        arrows: total > 8,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
            slidesToShow: 3,
            slidesToScroll: 3
            }
        }
        ]
  };

  return (


    <Slider className="monitoramento" {...settings}>
        <TecnologiasIcons imagem={grafana} />
        <TecnologiasIcons imagem={zabbix} />
        <TecnologiasIcons imagem={paloalto} />
        <TecnologiasIcons imagem={karpersky} />
    </Slider>



  );
};

export default MonitoramentoContainer;