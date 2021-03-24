import React from "react"
import ArrowButton from "../../utilities/arrow button/index"
import union from "../../../assets/images/utilities/Union.svg"
import ellipses from "../../../assets/images/about/ellipses.svg"

import "./style.scss"

export default function index() {
  return (
    <div className="about-hero">
      <div className="container">
        <div className="about-hero-content">
          <h2>About Us</h2>
          <p>
            „Unsere Vision ist es, die Lebensqualität der Frauen langfristig zu
            verbessern, in dem wir datenbasierte, digitale Therapien für
            hormonell-bedingte Beschwerden entwickeln. Zunächst konzentrieren
            wir uns dabei auf die hormonelle Verhütung und die Verbesserung des
            Verschreibungsprozesses der Antibabypille. „
          </p>
          <ArrowButton
            text="Hier geht’s zur Pille"
            color="#fff"
            backgroundColor="#1C2B49"
            union={union}
          />
        </div>
      </div>
      {/* <img className="hero-ellipses-image" src={ellipses} alt="ellipses" /> */}
    </div>
  )
}
