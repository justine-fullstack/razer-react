import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Contact/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <Container>
        <Row className="contact-row">
          <Col sm={5}>
            <p className="section-headline">ASK A QUESTION</p>
            <Form>
              <div className="mb-3">
                <Row>
                  <Col sm={6}>
                    <Form.Control type="text" placeholder="Name" />
                  </Col>
                  <Col sm={6}>
                    <Form.Control type="number" placeholder="Phone Number" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Form.Control type="email" placeholder="Email Address" />
                    <Form.Control type="text" placeholder="Permanent Address" />
                    <Form.Control
                      className="message-input"
                      type="text"
                      placeholder="Message"
                    />
                  </Col>
                </Row>
              </div>
              <Button className="action-btn" type="submit">
                SEND
              </Button>
            </Form>
          </Col>
          <Col sm={4}></Col>
          <Col sm={3}>
            <p className="section-headline">INFORMATION</p>
            <div className="info-container">
              <p className="info-header">ADDRESS</p>
              <p className="info">
                123 East 123th St. <br />
                Floor 123 <br />
                New York, NY, 1 0003
              </p>
              <p className="info-header">PHONE</p>
              <p className="info">+1 234 567 8910</p>
              <p className="info-header">EMAIL</p>
              <p className="info">hello@fullstack.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
