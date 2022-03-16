import '../styles/newsLetter.css'

function NewsLetter() {
  return(
    <div className='newsLetter'>
      <p className='title'>NEWSLETTER FOREVER BABY</p>
      <p className='text'>Cadastre-se agora para não perder nenhuma promoção</p>
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