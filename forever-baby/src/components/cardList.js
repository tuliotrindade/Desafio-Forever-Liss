import Cards from "./card"
import Bebe from "../images/bebe.jpg";

function CardList() {
  
  return(
      data.map(({ title, price, img }, index) => {
        return (
            <Cards key={index} title={title} price={price} img={img}/>
        )
      }) 
  )
}

export default CardList;