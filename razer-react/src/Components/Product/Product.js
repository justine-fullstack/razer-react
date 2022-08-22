import React from "react"
import Col from "react-bootstrap/Col"
import "../../Components/Product/Product.css"
export default function Product(props){
    const {cardImg, cardTitle, cardSubtitle} = props;
    return(
        <>
            <Col sm={3}>
                <div className="imgContainer">
                    <img className="cardImg" src={cardImg} />
                </div>
                <div className="cardDescription">
                    <p className="cardTitle mb-0">{cardTitle}</p>
                    <p className="cardSubtitle">{cardSubtitle}</p>
                    <a href="" className="learnMore">LEARN MORE</a>
                </div>
            </Col>
        </>
    )
}