import React, { useState } from 'react';
import Logo from '../images/foreverBabyLogo.png';
import Profile from '../images/profile.png';
import Cart1 from '../images/cart1.png';
import Menu from '../images/menu.png';
import Nav from './nav';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import '../styles/mobileHeader.css'

function MobileHeader() {
  const [render, setRender] = useState(false);
  return(
    <header className='header'>
      <div className='menuLogoContainer'>
        <Button 
          variant='ligth'
          onClick={ () => render ? setRender(false) : setRender(true)}
        >
          <img
            src= { Menu }
            alt="menu"
            className='menu'
          />
          </Button>
        <a href='/'>
          <img src= { Logo } alt="logo" className='logo'></img>
        </a>
      </div>
      <div>
        <img src={ Profile } alt="perfil"/>
        <img src={ Cart1 } alt="carrinho"/>
      </div>
        <InputGroup className="mb-3 input">
          <FormControl 
            placeholder="Qual o mimo de hoje para o seu anjinho?"
            aria-label="Qual o mimo de hoje para o seu anjinho?"
            aria-describedby="basic-addon1"
          />
          <Button variant="ligth">BUSCAR</Button>
        </InputGroup>
        {
          render ? <Nav/> : null
        }
    </header>
  )
}

export default MobileHeader;