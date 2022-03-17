import React, { useState } from 'react';
import Logo from '../images/foreverBabyLogo.png';
import Profile from '../images/profile.png';
import Cart1 from '../images/cart1.png';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import '../styles/header.css'

function Header(){
  const [inputData, setInputdata] = useState('');

	return(
    <header className='desktopHeader'>
      <img src= { Logo } alt="logo" className='logo'></img>
      <div className='inputContainer'>
        <InputGroup className="mb-3 input">
          <FormControl 
            placeholder="Qual o mimo de hoje para o seu anjinho?"
            aria-label="Qual o mimo de hoje para o seu anjinho?"
            aria-describedby="basic-addon1"
            onChange={ (e) => setInputdata(e.target.value)}
          />
          <Button
            variant="outline-secondary" 
            id="button-addon2"
            onClick={ () => {
              const regex = /[^a-zA-Z0-9]+/g;
              if (inputData.length < 3) {
                alert('Sua pesquisa deve ter mais de 3 caracteres')
              }
              if (regex.test(inputData) === true) {
                return alert('Sua pesquisa não deve ter caracteres especiais')
              }
            }}
          >
            BUSCAR
          </Button>
        </InputGroup>
      </div>
      <div className='profileCartContainer'>
        <a href='/' className='linksContainer'>
          <img src={ Profile } alt="perfil" className='icons'/>
          <a href='/' className='text'>MINHA CONTA</a>
        </a>
        <a href='/' className='linksContainer'>
          <img src={ Cart1 } alt="carrinho" className='icons'/>
          <a href='/' className='text'>CARRINHO</a>
        </a>
      </div>
    </header>
  )
}

export default Header;