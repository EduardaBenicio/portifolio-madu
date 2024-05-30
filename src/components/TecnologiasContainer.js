import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TecnologiasIcons from './TecnologiasIcons'; // Importe seu componente de ícone de tecnologia


import laravel from '../assets/image/tecnologias/laravel.svg'
import bootstrap from '../assets/image/tecnologias/bootstrap.svg'
import css from '../assets/image/tecnologias/css.svg'
import git from '../assets/image/tecnologias/git.svg'
import html from '../assets/image/tecnologias/html.svg'
import mysql from '../assets/image/tecnologias/mysql.svg'
import postgre from '../assets/image/tecnologias/postgre.svg'
import react from '../assets/image/tecnologias/react.svg'
import spring from '../assets/image/tecnologias/spring.svg'

const tecnologias = require.context('../assets/image/tecnologias', false, /\.(png|jpe?g|svg)$/);
const tecnologiaIcons = tecnologias.keys().map(image => tecnologias(image));

const TecnologiasContainer = ({ tecnologiasIcons }) => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
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


    <Slider className="tecnologias" {...settings}>
        <TecnologiasIcons imagem={laravel} />
        <TecnologiasIcons imagem={bootstrap} />
        <TecnologiasIcons imagem={css} />
        <TecnologiasIcons imagem={git} />
        <TecnologiasIcons imagem={html} />
        <TecnologiasIcons imagem={mysql} />
        <TecnologiasIcons imagem={postgre} />
        <TecnologiasIcons imagem={react} />
        <TecnologiasIcons imagem={spring} />
    </Slider>



  );
};

export default TecnologiasContainer;