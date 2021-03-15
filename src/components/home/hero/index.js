import React from "react"
import ArrowButton from "../../utilities/arrow button"
import facevideoMp4 from "../../../assets/video/video.mp4"
import faceVideoImg from "../../../assets/video/video-img.jpg"
import union from "../../../assets/images/utilities/Union.svg"

import "./style.scss"

function index() {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay muted loop  poster={faceVideoImg}> 
        <source src={facevideoMp4} type="video/mp4" />
      </video>
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
