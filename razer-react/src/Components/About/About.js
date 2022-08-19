import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import ThxLogo from '../../Assets/razer-nari-thx-logo.png';
import ChromaLogo from '../../Assets/razer-nari-chroma-logo.png';
import RazerNariLogo from '../../Assets/razer-nari-logo.svg';
import './About.css'


function About(){
	return(
		<section className="about-section">
			<Container>
				<Row>
					<Col md="6" className="about-description-container">
						<p className="description-title">SUPREME WIRELESS IMMERSION</p>
						<p className="description">When it comes to gaming immersion, sound plays a critical role. It engages your sense of hearing to determine the atmosphere and mood, creating
						a lifelike experience that lets you truly embody your game character. Standing by this philosophy, we've built a headset with THX Spatial Audio 
						to bring you 360° positional sound, giving you greater spatial awareness. We've also added ergonomic design features to make this one of the 
						most comfortable daily drivers for gaming. This is the Razer Nari.</p>
						<div className="about-description-images">
							<img src={ThxLogo} alt="THX Logo"/>
							<img src={ChromaLogo} alt="Chroma Logo"/>
						</div>
						<img className="razer-nari-logo" src={RazerNariLogo} alt="Razer Nari Logo"/>
					</Col>  
				</Row>
			</Container>
		</section>
	)
}

export default About