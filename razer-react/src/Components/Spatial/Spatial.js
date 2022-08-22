import React from "react"
import thxIcon from "../../Assets/razer-nari-thx-logo.png"
import { Container } from "react-bootstrap"
import "../Spatial/Spatial.css"

export default function Spatial(){
  return(
    <section className="spatialSection">
      <Container>
        <div className="thxSpatialContainer">
          <p className="sectionHeadline">THX SPATIAL AUDIO</p>
          <p className="description">THX Spatial Audio goes beyond traditional surround sound by simulating soung in a 360° sphere around you. With the Nari Ultimate, you
          can now react to any in-game movement, even if its coming from above or beneath you, giving you heightened senses during your game. Unleash your predatory
          instincts with sounds as a weapon.</p>
          <img className="thxIcon" src={thxIcon}/>
        </div>
      </Container>
    </section>
  )
}