import Slider from "react-slick";
import '../styles/carosel.css'
import Cards from "./card";
import Bebe from "../images/bebe.jpg";

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
          breakpoint: 426,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2
          }
        }
      ]
  }
  const data = [
    { title: "Produtos para banho", price: "99,99", img: Bebe },
    { title: "Fralda", price: "99,99", img: Bebe },
    { title: "Produto para cabelo", price: "99,99", img: Bebe },
    { title: "Roupas", price: "99,99", img: Bebe },
    { title: "Produto para cabelo", price: "99,99", img: Bebe },
    { title: "Roupas", price: "99,99", img: Bebe },
    { title: "Produtos para banho", price: "99,99", img: Bebe },
    { title: "Fralda", price: "99,99", img: Bebe },
    { title: "Produto para cabelo", price: "99,99", img: Bebe },
    { title: "Roupas", price: "99,99", img: Bebe },
    { title: "Produto para cabelo", price: "99,99", img: Bebe },
    { title: "Roupas", price: "99,99", img: Bebe }
  ];
  return (
    <div className="carosel">
      <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
			<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <h2>FOREVER BABY DESTAQUES</h2>
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