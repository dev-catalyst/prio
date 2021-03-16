import React from "react"
import Heading from "../../utilities/heading"
import ArrowButton from "../../utilities/arrow button"
import facevideoMp4 from "../../../assets/video/video.mp4"
import faceVideoImg from "../../../assets/video/video-img.png"
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
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster={faceVideoImg}
        crossOrigin="anonymous"
      >
        <source src={facevideoMp4} type="video/mp4" />
      </video>
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
