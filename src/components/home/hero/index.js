import React from "react"
import Heading from "../../utilities/heading"
import ArrowButton from "../../utilities/arrow button"
// import face from "../../../assets/images/home/image 206.png"
import faceVideo from "../../../assets/images/1046787226-hd.mp4"

import "./style.scss"

function index() {
  return (
    <div className="hero">
      {/* <img className="hero-video" src={face} alt="hero face" /> */}
      <video className="hero-video" src={faceVideo} autoPlay muted loop />
      <div className="container">
        <div className="hero-content">
          <Heading
            text="EINE ZUKUNFT IN DER DEINE GESUNDHEIT PRIO ONE IST"
            color="#fff"
            size="45px"
          />
          <ArrowButton
            text="Hier geht’s zur Pille"
            paddingRight="80px"
            backgroundColor="#F46853"
          />
        </div>
      </div>
    </div>
  )
}

export default index
