import React from "react"
import {Container, Row} from "react-bootstrap"
import NariUltimate from "../../Assets/Nari-Ultimate-Base.png"
import Nari from "../../Assets/Nari-Ultimate-Base.png"
import Mamba from "../../Assets/Mamba-Wireless-Base.png"
import Blackwidow from "../../Assets/BlackWidow-Elite-Base.png"
import Product from "../../Components/Product/Product"
import "../Products/Products.css"

export default function Products(props){
    const products =[
        {
            cardImg: NariUltimate,
            cardTitle: "RAZER NARI ULTIMATE",
            cardSubtitle: "Wireless Gaming Headset with Razer Hypersense"
        },
        {
            cardImg: Nari,
            cardTitle: "RAZER NARI",
            cardSubtitle: "Wired Gaming Headset with Razer Hypersense"
        },
        {
            cardImg: Mamba,
            cardTitle: "RAZER MAMBA WIRELESS",
            cardSubtitle: "Full Razer Chroma and Wireless Convenience"
        },
        {
            cardImg: Blackwidow,
            cardTitle: "RAZER BLACKWIDOW ELITE",
            cardSubtitle: "The Complete Mechanical Gaming Keyboard"
        }
    ];

    const product = products.map((product, index) => (
        <Product
        key={index}
        cardImg={product.cardImg}
        cardTitle={product.cardTitle}
        cardSubtitle={product.cardSubtitle}
        />
    ))

    return(
        <section className="productsSection">
            <Container>
                <div className="otherProducts">
                    <p className="sectionHeadline text-center">EXPLORE OTHER PRODUCTS</p>
                </div>
                <Row className="otherProductsRow">
                    {product}
                </Row>
            </Container>
        </section>
    )
}