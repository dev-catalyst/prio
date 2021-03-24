import React from "react"
import Hero from "../hero"
import Gallery from "../gallery"
import WhoWeAre from "../whoWeAre"
import ellipses from "../../../assets/images/about/ellipses.svg"

import "./style.scss"

function topThreeCombo() {
  return (
    <div className="about-topThreeCombo">
      <Hero />
      <Gallery />
      <WhoWeAre />
      <img className="about-topThreeCombo-image" src={ellipses} alt="single" />
    </div>
  )
}

export default topThreeCombo
