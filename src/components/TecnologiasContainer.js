import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import TecnologiasIcons from './TecnologiasIcons'
import tecnologias from '../data/tecnologias'

const MAX_SLIDES = 8

const TecnologiasContainer = () => {
  const total = tecnologias.length
  const visiveis = Math.min(MAX_SLIDES, total)

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: visiveis,
    slidesToScroll: visiveis,
    arrows: total > MAX_SLIDES, // setas só se houver mais ícones do que cabem
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
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ],
  }

  return (
    <Slider className="tecnologias" {...settings}>
      {tecnologias.map(({ nome, imagem }) => (
        <TecnologiasIcons key={nome} nome={nome} imagem={imagem} />
      ))}
    </Slider>
  )
}

export default TecnologiasContainer
