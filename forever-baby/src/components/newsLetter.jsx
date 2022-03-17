import React, { useState, useEffect } from 'react';
import axios from "axios";
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import '../styles/newsLetter.css'

function NewsLetter() {
  const [email, setEmail] = useState();
  const [emailData, setEmailData] = useState();

   useEffect(() => {
    if(email) {
      const url =
        "https://foreverliss1.websiteseguro.com/teste-dev/newsletter.php";
      axios
        .post(url, {email: email} , {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((output) => {
          console.log(output.data.Mensagem)
          alert(output.data.Mensagem);
        })
        .catch((error) => alert(error));
    }
  }, [email]);

   const sendEmail = () => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const valid = regex.test(emailData);
    if(valid) {
      return setEmail(emailData);
    }
    return alert('digite um email valido')
  };

  return(
    <div className='newsLetter'>
      <p className='title'>NEWSLETTER FOREVER BABY</p>
      <p className='text'>Cadastre-se agora para não perder nenhuma promoção</p>
      <div className='inputContainer'>
        <InputGroup className="mb-3 input">
          <FormControl 
            placeholder="Digite aqui seu melhor e-mail"
            aria-label="Digite aqui seu melhor e-mail"
            aria-describedby="basic-addon1"
            onChange={ (e) => setEmailData(e.target.value) }
          />
          <Button
            variant="outline-secondary" 
            id="button-addon2"
            onClick={ () => sendEmail()}
          >
            Cadastrar
          </Button>
        </InputGroup>
        </div>
    </div>
  )
}

export default NewsLetter;