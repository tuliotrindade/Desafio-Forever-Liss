import Logo from '../images/foreverBabyLogo.png';
import User from '../images/user.png';
import Cart from '../images/cart.png';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import '../styles/mobileHeader.css'

function MobileHeader() {
  return(
    <header className='header'>
      <img src= { Logo } alt="logo"></img>
      <div>
        <img src={ User } alt="perfil"/>
        <img src={ Cart } alt="carrinho"/>
      </div>
        <InputGroup className="mb-3 input">
          <FormControl 
            placeholder="Qual o mimo de hoje para o seu anjinho?"
            aria-label="Qual o mimo de hoje para o seu anjinho?"
            aria-describedby="basic-addon1"
          />
          <Button variant="ligth">BUSCAR</Button>
        </InputGroup>
    </header>
  )
}

export default MobileHeader;