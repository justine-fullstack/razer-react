import React from "react";
import razerFooterIcon from "../../Assets/wordmark.svg";
import { Container, Row, Col } from "react-bootstrap";
import twitterIcon from "../../Assets/twitter-logo-silhouette.svg";
import facebookIcon from "../../Assets/facebook-logo.svg";
import googleIcon from "../../Assets/google-plus.svg";
import "../Footer/Footer.css";

export default function Footer() {
  return (
    <section className="footerSection">
      <Container>
        <div className="footerContent">
          <Row>
            <Col sm={2}>
              <img className="footerIcon" src={razerFooterIcon} />
            </Col>
            <Col sm={8}>
              <ul className="footerList">
                <li>
                  <a href="">PRODUCTS</a>
                </li>
                <li>
                  <a href="">ABOUT</a>
                </li>
                <li>
                  <a href="">COMMUNITY</a>
                </li>
                <li>
                  <a href="">CONTACT US</a>
                </li>
              </ul>
            </Col>
            <Col sm={2} className="m-auto d-block">
              <a href="">
                <img className="footerIcon" src={twitterIcon} />
              </a>
              <a href="">
                <img className="footerIcon" src={facebookIcon} />
              </a>
              <a href="">
                <img className="footerIcon" src={googleIcon} />
              </a>
            </Col>
          </Row>
          <hr className="footerSectionDivider" />
          <p class="mb-0 copyright d-none d-sm-block">
            COPYRIGHT 2019 FULLSTACKHQ INC. ALL RIGHTS RESERVED
          </p>
          <p class="mb-0 pt-3 pb-3 copyright d-block d-sm-none">
            COPYRIGHT 2019 FULLSTACKHQ INC. <br />
            ALL RIGHTS RESERVED
          </p>
        </div>
      </Container>
    </section>
  );
}
