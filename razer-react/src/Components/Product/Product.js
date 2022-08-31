import React from "react";
import Col from "react-bootstrap/Col";
import "../../Components/Product/Product.css";
import Image from "react-bootstrap/Image";
export default function Product(props) {
  const { cardImg, cardTitle, cardSubtitle } = props;
  return (
    <>
      <Col sm={3}>
        <div className="imgContainer">
          <Image className="cardImg" src={cardImg} fluid />
        </div>
        <div className="cardDescription">
          <p className="cardTitle mb-0">{cardTitle}</p>
          <p className="cardSubtitle">{cardSubtitle}</p>
          <a href="" className="learnMore">
            LEARN MORE
          </a>
        </div>
      </Col>
    </>
  );
}
