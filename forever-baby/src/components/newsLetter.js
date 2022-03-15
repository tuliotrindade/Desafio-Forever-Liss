import '../styles/newsLetter.css'

function NewsLetter() {
  return(
    <div className='newsLetter'>
      <h3>NEWSLETTER FOREVER BABY</h3>
      <h5>Cadastre-se agora para não perder nenhuma promoção</h5>
      <div>
        <input
          placeholder="Digite aqui seu melhor e-mail"
        />
        <button>CADASTRAR</button>
      </div>
    </div>
  )
}

export default NewsLetter;