import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import RazerLogo from '../../Assets/wordmark.svg';
import './Navbar.css'

function MainNavbar(){
  return(
		<Navbar expand="lg">
      <Container className="header-container">
        <Navbar.Brand><img src={RazerLogo} alt="Razer Logo"/></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
						<NavDropdown title="PRODUCTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">LAPTOPS</NavDropdown.Item>
              <NavDropdown.Item href="#">MOBILE</NavDropdown.Item>
              <NavDropdown.Item href="#">MOUSES & MATS</NavDropdown.Item>
              <NavDropdown.Item href="#">KEYBOARDS</NavDropdown.Item>
							<NavDropdown title="HEADSETS & AUDIO" id="dropdown-button-drop-end" drop="end">
								HEADSETS & AUDIO
							</NavDropdown> 
							<NavDropdown.Item href="#">CONSOLE</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">ABOUT</Nav.Link>
            <Nav.Link href="#">COMMUNITY</Nav.Link>
						<Nav.Link href="#">CONTACT US</Nav.Link>
          </Nav>
					<a href="#" className="buy-btn">BUY NOW</a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavbar