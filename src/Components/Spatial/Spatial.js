import React, { useEffect } from "react";
import thxIcon from "../../Assets/razer-nari-thx-logo.png";
import { Container } from "react-bootstrap";
import "../Spatial/Spatial.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Spatial() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section
      className="spatial-section"
      data-aos="fade-zoom-in"
      data-aos-offset="0"
      data-aos-delay="300"
    >
      <Container>
        <div className="thx-spatial-container">
          <p className="section-headline">THX SPATIAL AUDIO</p>
          <p className="description">
            THX Spatial Audio goes beyond traditional surround sound by
            simulating soung in a 360° sphere around you. With the Nari
            Ultimate, you can now react to any in-game movement, even if its
            coming from above or beneath you, giving you heightened senses
            during your game. Unleash your predatory instincts with sounds as a
            weapon.
          </p>
          <img className="thx-icon" src={thxIcon} alt="" />
        </div>
      </Container>
    </section>
  );
}
