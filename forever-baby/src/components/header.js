import Logo from '../images/foreverBabyLogo.png';
import User from '../images/user.png';
import Cart from '../images/cart.png'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import '../styles/header.css'

function Header(){
	return(
    <header>
      <img src= { Logo } alt="logo"></img>
      <div>
        <InputGroup className="mb-3">
          <FormControl 
            placeholder="Qual o mimo de hoje para o seu anjinho?"
            aria-label="Qual o mimo de hoje para o seu anjinho?"
            aria-describedby="basic-addon1"
          />
          <Button variant="primary">BUSCAR</Button>
        </InputGroup>
      </div>
      <div>
        <img src={ User } alt="perfil"/>
        <img src={ Cart } alt="carrinho"/>
      </div>
    </header>
  )
}

export default Header;