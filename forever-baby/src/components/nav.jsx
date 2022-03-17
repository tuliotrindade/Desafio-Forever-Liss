import React from 'react';
import '../styles/navDesktop.css'

function NavDesktop() {
  const navItens = [
    "PERFUME INFANTIL",
    "SABONETES",
    "PÓS-BANHO",
    "ASSADURAS",
    "HIDRATANTES",
    "LENÇOS UMEDECIDOS",
  ];
  return(
    <nav className='upperNav'>
      {
        navItens.map((item, index) => {
          return( 
            <a 
              href='/'
              key={ index }
              style={{ textDecoration: "none", color: "#FFFFFF" }}
              className='navElement'
            >
              { item }
            </a>
          )
        })
      }
    </nav>
  )
}

export default NavDesktop;