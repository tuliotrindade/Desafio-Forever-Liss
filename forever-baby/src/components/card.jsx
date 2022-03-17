import React from "react";
import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import Cart from "../images/cart.png"
import "../styles/card.css"

function Cards({title, price, img}) {
  return(
    <Card className="card">
      <a href="/">
        <Card.Img 
          src={ img }
          alt="product"
          style={{ minHeigth: "190px", maxHeight: "190px", maxWidth: "256px" }}
        />
      </a>
    <Card.Body>
      <a 
        href="/"
        style={{
          textDecoration: "none"
        }}
      >
      <Card.Title
        style={{
            fontSize: "16px",
            fontFamily: "Roboto",
            fontWeight: "bold",
            color: "#345CD7",
            lineHeight: "19px",
            textAlign: "left",
          }}
      >{ title }</Card.Title>
      </a>
      <Card.Text
        style={{
          fontSize: "16px",
          fontFamily: "Roboto",
          fontWeight: "bold",
          color: "#BF6B84",
          lineHeight: "19px",
          }}
      > { `R$ ${ price }` } </Card.Text>
      <ReactStars
        value={5}
        count={5}
        size={24}
        activeColor="#ffd700"
        classNames="rating"
      />
      <Button
        variant="primary"
        className="btnCart"
        style={{
          display: "flex",
          backgroundColor: "#FF8A00",
          border: "none",
        }}
        onClick={() => alert("produto adicionado ao carrinho")}
      >
        <img 
          src={Cart}
          style={{ display: "inline-flex", width: "25px" }}
        />
        <p 
          style={{
            alignSelf: "center",
            display: "inline-flex",
            fontFamily: "Roboto",
            fontSize: "12px",
            fontWeight: "bold",
            lineHeight: "16px",
            margin: "0px",
          }}  
        > ADCIONAR AO CARRINHO </p>
      </Button>
    </Card.Body>
    </Card>
  )
}

Cards.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.any,
};

export default Cards;