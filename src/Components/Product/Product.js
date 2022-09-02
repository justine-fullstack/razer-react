import React from "react";
import Col from "react-bootstrap/Col";
import "../../Components/Product/Product.css";
import Image from "react-bootstrap/Image";
export default function Product(props) {
  const { cardImg, cardTitle, cardSubtitle } = props;
  return (
    <>
      <Col sm={3}>
        <div className="img-container">
          <Image className="card-img" src={cardImg} fluid />
        </div>
        <div className="card-description">
          <p className="card-title mb-0">{cardTitle}</p>
          <p className="card-subtitle">{cardSubtitle}</p>
          <a href="" className="learn-more">
            LEARN MORE
          </a>
        </div>
      </Col>
    </>
  );
}
