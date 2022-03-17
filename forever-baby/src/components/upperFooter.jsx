import React from 'react';
import Instagram from '../images/instagram.png';
import Facebook from '../images/facebook.png';
import Youtube from '../images/youtube.png';
import Tiktok from '../images/tiktok.png';
import Pagamentos from '../images/pagamentos.png'
import '../styles/upperFooter.css'


function UpperFooter() {
  const navItens = [
    "PERFUME INFANTIL",
    "SABONETES",
    "PÓS-BANHO",
    "ASSADURAS",
    "HIDRATANTES",
    "LENÇOS UMEDECIDOS",
  ];
  return(
    <footer>
      <p className='title'>VISITE NOSSAS REDES SOCIAIS</p>
      <div className='socialContainer'>
        <a href='https://www.instagram.com/foreverliss/'>
          <img className='social' src={ Instagram } alt="instagram"/>
        </a>
        <a href='https://www.facebook.com/foreverliss'>
          <img className='social' src={ Facebook } alt="facebook"/>
        </a>
        <a href='https://www.youtube.com/c/ForeverLissOficial'>
          <img className='social' src={ Youtube } alt="youtube"/>
        </a>
        <a href='https://www.tiktok.com/@foreverlissprofessional'>
          <img className='social' src={ Tiktok } alt="tiktok"/>
        </a>
      </div>
      <nav className='lowerNav'>
        {
          navItens.map((item, index) => {
            return <p key={index}>  {item}  </p>
          })
        }
      </nav>
      <p>FORMAS DE PAGAMENTO</p>
      <img src={ Pagamentos } alt="formas de pagamento"/>
    </footer>
  )
}

export default UpperFooter;