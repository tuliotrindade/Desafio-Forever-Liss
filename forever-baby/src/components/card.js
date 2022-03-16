import { Card, Button } from "react-bootstrap";

function Cards({title, price, img}) {
  return(
    <Card
      style={{
        width: "256px",
        heigth: "387px",
        borderBottom: "5px solid #F5717F",
      }}
    >
      <a href="/">
        <Card.Img 
          src={ img }
          alt="product"
          style={{ minHeigth: "190px", maxHeight: "190px", maxWidth: "256px" }}
        />
      </a>
    <Card.Body>
      <a href="/">
      <Card.Title>{ title }</Card.Title>
      </a>
      <Card.Text> { `R$ ${ price }` } </Card.Text>
      <Button variant="primary">ADCIONAR AO CARRINHO</Button>
    </Card.Body>
    </Card>
  )
}

export default Cards;