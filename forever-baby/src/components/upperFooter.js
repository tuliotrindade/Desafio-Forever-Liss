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
      <h3>VISITE NOSSAS REDES SOCIAIS</h3>
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
            return <h4 key={index}>{item}</h4>
          })
        }
      </nav>
      <h3>FORMAS DE PAGAMENTO</h3>
      <img src={ Pagamentos } alt="formas de pagamento"/>
    </footer>
  )
}

export default UpperFooter;