import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import RazerLogo from "../../Assets/wordmark.svg";
import "./Navbar.css";

function MainNavbar() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Navbar expand="lg">
        <Container className="header-container">
          <Navbar.Brand>
            <img src={RazerLogo} alt="Razer Logo" />
          </Navbar.Brand>
          <Button className="d-block d-sm-none" onClick={handleShow}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">LAPTOPS</NavDropdown.Item>
                <NavDropdown.Item href="#">MOBILE</NavDropdown.Item>
                <NavDropdown.Item href="#">MOUSES &#38; MATS</NavDropdown.Item>
                <NavDropdown.Item href="#">KEYBOARDS</NavDropdown.Item>
                <NavDropdown
                  title="HEADSETS &#38; AUDIO"
                  id="dropdown-button-drop-end"
                  drop="end"
                  className="submenu"
                >
                  <NavDropdown.Item href="">WIRED</NavDropdown.Item>
                  <NavDropdown.Item href="">WIRELESS</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="#">CONSOLE</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">ABOUT</Nav.Link>
              <Nav.Link href="#">COMMUNITY</Nav.Link>
              <Nav.Link href="#">CONTACT US</Nav.Link>
            </Nav>
            <a href="#" className="buy-btn">
              BUY NOW
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} id="navMobMenu">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div class="mob-menu">
            <ul class="mob-menu-list">
              <li>
                <a href="#productMobMenu" role="button" onClick={handleShow}>
                  PRODUCTS<i class="fa-solid fa-chevron-right"></i>
                </a>
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
            <button class="buy-btn">BUY NOW</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MainNavbar;
