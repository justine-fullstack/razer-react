import React from "react";
import Feature from "../../Components/Features/Feature"
import CoolingGelIcon from "../../Assets/razer-nari-Cooling-Gel-Infused-Cushions-icon.svg"
import AutoAdjustIcon from "../../Assets/razer-nari-Auto-Adjusting-Headband-icon.svg" 
import SwivelingIcon from "../../Assets/razer-nari-Swiveling-Earcups-icon.svg"
import GameChatIcon from "../../Assets/razer-nari-Game-Chat-Balance-icon.svg"
import WirelessIcon from "../../Assets/razer-nari-Wireless-Audio-icon.svg"
import WiredIcon from "../../Assets/razer-nari-35-mm-Wired-Mode-icon.svg"
import Container from "react-bootstrap/Container"
import "../Features/Features.css"

export default function Features(props){
  const features = [
    {
      image: CoolingGelIcon,
			title: "COOLING GEL-INFUSED CUSHIONS",
			description:"Reduces heat build-up during intense gaming sessions",
    },
		{
      image: AutoAdjustIcon,
			title: "AUTO-ADJUSTING HEADBAND",
			description:"Maximum adjustability to fit seamlessly onto any head size",
    },
		{
      image: SwivelingIcon,
			title: "SWIVELING EARCUPS",
			description:"Adapting to the shape and position of your ears",
    },
		{
      image: GameChatIcon,
			title: "GAME/CHAT BALANCE",
			description:"Fine-tune between game and chat volume for the perfect mix that lets you enjoy immersive sound without interrupting team communication.",
    },
		{
      image: WirelessIcon,
			title: "2.4GHZ WIRELESS AUDIO",
			description:"Get lag-free, high-fidelity gaming audio with a wireless range of up to 12 meters smoothly without disconnection.",
    },
		{
      image: WiredIcon,
			title: "WIRED MODE",
			description:"Get seamless cross-platform compatability via 3.5mm audio jack in wired mode. Enjoy high quality stereo sound whether you're playing on PC.",
    }
  ];

	const feature = features.map((feature, index) => (
		<Feature
			key={index}
			title={feature.title}
			description={feature.description}
			image={feature.image}
		/>
	));

	return (
		<>
			<section className="featuresSection">
				<div className="featureHeader">
					<p className="sectionHeadline">COMPLEMENTED BY COMFORT</p>
					<p className="featureSubheadline">The Razer Nari is designed so that its immersive technology is complemented by comfortable features, letting you escape into game worlds for hours without strain.</p>
				</div>
				<Container className="flexContainer">
					{feature}
				</Container>
				<Container>
					<hr className="sectionDivider"/>
				</Container>
			</section>
		</>
	)
}