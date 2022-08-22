import React from "react";
import {Container, Row, Col, Form, Button} from "react-bootstrap"
import "../Contact/Contact.css"

export default function Contact(p){

    return(
			<section className="contactSection">
				<Container>
					<Row className="contactRow">
						<Col sm={5}>
							<p className="sectionHeadline">ASK A QUESTION</p>
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
											<Form.Control className="messageInput" type="text" placeholder="Message" />
										</Col>
									</Row>
								</div>
								<Button className="actionBtn" type="submit">SEND</Button>
							</Form>
						</Col>
						<Col sm={4}></Col>
						<Col sm={3}>
							<p className="sectionHeadline">INFORMATION</p>
							<div className="infoContainer">
								<p className="infoHeader">{infoHeader}</p>
								<p className="info">{info}</p>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		)
}