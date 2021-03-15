import React from "react"
import Heading from "../../utilities/heading"
import ArrowButton from "../../utilities/arrow button"
// import face from "../../../assets/images/home/image 206.png"
import faceVideo1 from "../../../assets/images/1046787226-hd.mp4"
import faceVideo2 from "../../../assets/images/1046787226-hd.webm"
import union from "../../../assets/images/utilities/Union.svg"

import "./style.scss"

function Hero() {
  const smothScroll = () => {
    const element = document.getElementById("section2")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }
  return (
    <div className="hero">
      {/* <img className="hero-video" src={face} alt="hero face" /> */}
      <video className="hero-video" src={faceVideo2} autoPlay muted loop />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-content-header">
            EINE ZUKUNFT IN DER DEINE GESUNDHEIT PRIO ONE IST
          </h1>
          <ArrowButton
            text="Hier geht’s zur Pille"
            paddingRight="80px"
            color="#fff"
            backgroundColor="#F46853"
            union={union}
          />
        </div>
        <span className="scroll-btn" onClick={smothScroll}>
          <span className="mouse">
            <span></span>
          </span>
          scroll
        </span>
      </div>
    </div>
  )
}

export default Hero
