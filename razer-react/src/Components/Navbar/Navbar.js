import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronRight,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import RazerLogo from "../../Assets/wordmark.svg";
import "./Navbar.css";

function MainNavbar() {
  const [show, setShow] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showAudioMenu, setShowAudioMenu] = useState(false);
  return (
    <section>
      <Navbar expand="lg">
        <Container className="header-container">
          <Navbar.Brand>
            <img src={RazerLogo} alt="Razer Logo" />
          </Navbar.Brand>
          <a
            href="#mobMenu"
            className="d-lg-none d-sm-none d-md-block"
            onClick={() => setShow(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </a>
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
      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header>
          <Offcanvas.Title>MENU</Offcanvas.Title>
          <FontAwesomeIcon
            icon={faXmark}
            className="navClose"
            onClick={() => setShow(false)}
          />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div class="mob-menu">
            <ul class="mob-menu-list">
              <li>
                <a
                  href="#productMobMenu"
                  role="button"
                  onClick={() => setShowProductMenu(true)}
                >
                  PRODUCTS
                  <FontAwesomeIcon icon={faChevronRight} />
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
      <Offcanvas
        show={showProductMenu}
        onHide={() => setShowProductMenu(false)}
        href="#productMobMenu"
      >
        <Offcanvas.Header>
          <Offcanvas.Title onClick={() => setShowProductMenu(false)}>
            <FontAwesomeIcon icon={faChevronLeft} class="leftIcon" />
            PRODUCTS
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div class="mob-menu">
            <ul class="mob-menu-list">
              <li>
                <a href="">LAPTOPS</a>
              </li>
              <li>
                <a href="">MOBILES</a>
              </li>
              <li>
                <a href="">MOUSES AND MATS</a>
              </li>
              <li>
                <a href="">KEYBOARDS</a>
              </li>
              <li>
                <a href="#audioMobMenu" onClick={() => setShowAudioMenu(true)}>
                  HEADSETS AND AUDIO <FontAwesomeIcon icon={faChevronRight} />
                </a>
              </li>
              <li>
                <a href="">CONSOLE</a>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        show={showAudioMenu}
        onHide={() => setShowAudioMenu(false)}
        id="audioMobMenu"
      >
        <Offcanvas.Header>
          <Offcanvas.Title onClick={() => setShowAudioMenu(false)}>
            <FontAwesomeIcon icon={faChevronLeft} class="leftIcon" />
            HEADSETS AND AUDIO
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div class="mob-menu">
            <ul class="mob-menu-list">
              <li>
                <a href="">WIRED</a>
              </li>
              <li>
                <a href="">WIRELESS</a>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </section>
  );
}

export default MainNavbar;
