import React, { useState } from "react";
import Feature from "../../Components/Features/Feature";
import CoolingGelIcon from "../../Assets/razer-nari-Cooling-Gel-Infused-Cushions-icon.svg";
import AutoAdjustIcon from "../../Assets/razer-nari-Auto-Adjusting-Headband-icon.svg";
import SwivelingIcon from "../../Assets/razer-nari-Swiveling-Earcups-icon.svg";
import GameChatIcon from "../../Assets/razer-nari-Game-Chat-Balance-icon.svg";
import WirelessIcon from "../../Assets/razer-nari-Wireless-Audio-icon.svg";
import WiredIcon from "../../Assets/razer-nari-35-mm-Wired-Mode-icon.svg";
import GamingHeadsetA from "../../Assets/razer-nari-gallery-05-wireless-gaming-headset XS.jpg";
import GamingHeadsetB from "../../Assets/razer-nari-gallery-06-wireless-gaming-headset xs.jpg";
import GamingHeadsetC from "../../Assets/razer-nari-gallery-07-wireless-gaming-headset xs.jpg";
import GamingHeadsetD from "../../Assets/razer-nari-gallery-08-wireless-gaming-headset xs.jpg";
import GamingHeadsetImageA from "../../Assets/razer-nari-gallery-05-wireless-gaming-headset.jpg";
import GamingHeadsetImageB from "../../Assets/razer-nari-gallery-06-wireless-gaming-headset.jpg";
import GamingHeadsetImageC from "../../Assets/razer-nari-gallery-07-wireless-gaming-headset.jpg";
import GamingHeadsetImageD from "../../Assets/razer-nari-gallery-08-wireless-gaming-headset.jpg";
import { Modal } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Features/Features.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export default function Features(props) {
  const features = [
    {
      image: CoolingGelIcon,
      title: "COOLING GEL-INFUSED CUSHIONS",
      description: "Reduces heat build-up during intense gaming sessions",
    },
    {
      image: AutoAdjustIcon,
      title: "AUTO-ADJUSTING HEADBAND",
      description: "Maximum adjustability to fit seamlessly onto any head size",
    },
    {
      image: SwivelingIcon,
      title: "SWIVELING EARCUPS",
      description: "Adapting to the shape and position of your ears",
    },
    {
      image: GameChatIcon,
      title: "GAME/CHAT BALANCE",
      description:
        "Fine-tune between game and chat volume for the perfect mix that lets you enjoy immersive sound without interrupting team communication.",
    },
    {
      image: WirelessIcon,
      title: "2.4GHZ WIRELESS AUDIO",
      description:
        "Get lag-free, high-fidelity gaming audio with a wireless range of up to 12 meters smoothly without disconnection.",
    },
    {
      image: WiredIcon,
      title: "WIRED MODE",
      description:
        "Get seamless cross-platform compatability via 3.5mm audio jack in wired mode. Enjoy high quality stereo sound whether you're playing on PC.",
    },
  ];

  const feature = features.map((feature, index) => (
    <Feature
      key={index}
      title={feature.title}
      description={feature.description}
      image={feature.image}
    />
  ));

  const [firstSwiperImgShow, setFirstSwiperImgShow] = useState(false);
  const [secondSwiperImgShow, setSecondSwiperImgShow] = useState(false);
  const [thirdSwiperImgShow, setThirdSwiperImgShow] = useState(false);
  const [fourthSwiperImgShow, setFourthSwiperImgShow] = useState(false);
  const [fifthSwiperImgShow, setFifthSwiperImgShow] = useState(false);
  const [sixthSwiperImgShow, setSixthSwiperImgShow] = useState(false);

  return (
    <>
      <section className="features-section">
        <Container>
          <div className="feature-header">
            <p className="section-headline">COMPLEMENTED BY COMFORT</p>
            <p className="feature-subheadline">
              The Razer Nari is designed so that its immersive technology is
              complemented by comfortable features, letting you escape into game
              worlds for hours without strain.
            </p>
          </div>
        </Container>
        <Container className="flex-container">{feature}</Container>
        <Container>
          <hr className="section-divider" />
          <p className="section-headline text-center">PRODUCT IMAGES</p>
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img alt="" class="img-to-hover" src={GamingHeadsetA} />
              <div class="view-fullscreen">
                <a
                  class="view-btn"
                  href="#viewImage"
                  onClick={() => setFirstSwiperImgShow(true)}
                >
                  VIEW FULLSCREEN
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" class="img-to-hover" src={GamingHeadsetB} />
              <div class="view-fullscreen">
                <a
                  class="view-btn"
                  href="#viewImage"
                  onClick={() => setSecondSwiperImgShow(true)}
                >
                  VIEW FULLSCREEN
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" class="img-to-hover" src={GamingHeadsetC} />
              <div class="view-fullscreen">
                <a
                  class="view-btn"
                  href="#viewImage"
                  onClick={() => setThirdSwiperImgShow(true)}
                >
                  VIEW FULLSCREEN
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" class="img-to-hover" src={GamingHeadsetD} />
              <div class="view-fullscreen">
                <a
                  class="view-btn"
                  href="#viewImage"
                  onClick={() => setFourthSwiperImgShow(true)}
                >
                  VIEW FULLSCREEN
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" class="img-to-hover" src={GamingHeadsetA} />
              <div class="view-fullscreen">
                <a
                  class="view-btn"
                  href="#viewImage"
                  onClick={() => setFifthSwiperImgShow(true)}
                >
                  VIEW FULLSCREEN
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" class="img-to-hover" src={GamingHeadsetB} />
              <div class="view-fullscreen">
                <a
                  class="view-btn"
                  href="#viewImage"
                  onClick={() => setSixthSwiperImgShow(true)}
                >
                  VIEW FULLSCREEN
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
        <Modal
          show={firstSwiperImgShow}
          onHide={() => setFirstSwiperImgShow(false)}
          aria-labelledby="image-modal"
          centered
        >
          <Modal.Body>
            <img alt="" class="img-fluid" src={GamingHeadsetImageA} />
          </Modal.Body>
        </Modal>
        <Modal
          show={secondSwiperImgShow}
          onHide={() => setSecondSwiperImgShow(false)}
          aria-labelledby="image-modal"
          centered
        >
          <Modal.Body>
            <img alt="" class="img-fluid" src={GamingHeadsetImageB} />
          </Modal.Body>
        </Modal>
        <Modal
          show={thirdSwiperImgShow}
          onHide={() => setThirdSwiperImgShow(false)}
          aria-labelledby="image-modal"
          centered
        >
          <Modal.Body>
            <img alt="" class="img-fluid" src={GamingHeadsetImageC} />
          </Modal.Body>
        </Modal>
        <Modal
          show={fourthSwiperImgShow}
          onHide={() => setFourthSwiperImgShow(false)}
          aria-labelledby="image-modal"
          centered
        >
          <Modal.Body>
            <img alt="" class="img-fluid" src={GamingHeadsetImageD} />
          </Modal.Body>
        </Modal>
        <Modal
          show={fifthSwiperImgShow}
          onHide={() => setFifthSwiperImgShow(false)}
          aria-labelledby="image-modal"
          centered
        >
          <Modal.Body>
            <img alt="" class="img-fluid" src={GamingHeadsetImageA} />
          </Modal.Body>
        </Modal>
        <Modal
          show={sixthSwiperImgShow}
          onHide={() => setSixthSwiperImgShow(false)}
          aria-labelledby="image-modal"
          centered
        >
          <Modal.Body>
            <img alt="" class="img-fluid" src={GamingHeadsetImageB} />
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
}
