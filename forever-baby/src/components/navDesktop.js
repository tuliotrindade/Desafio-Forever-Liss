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
          return <h4 key={ index }>{ item }</h4>
        })
      }
    </nav>
  )
}

export default NavDesktop;