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
          return <p key={ index }>{ item }</p>
        })
      }
    </nav>
  )
}

export default NavDesktop;