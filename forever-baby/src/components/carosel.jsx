import React from "react";
import Slider from "react-slick";
import "../styles/carosel.css"
import Cards from "./card";
import data from "../data.js"

function Carosel() {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      rows: 2,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2
          }
        }
      ]
  }
  ;
  return (
    <div className="carosel">
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <p className='text1'>FOREVER BABY&nbsp; <p className='text2'>DESTAQUES</p></p>
        <Slider {...settings}>
          {
            data.map(({ title, price, img }, index) => {
              return (
            <Cards key={index} title={title} price={price} img={img}/>
            )
           }) 
          }
        </Slider>
    </div>
  )
}

export default Carosel;