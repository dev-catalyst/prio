import React from "react"
import ArrowButton from "../../utilities/arrow button"
import union from "../../../assets/images/utilities/Union.svg"
import ellipses1 from "../../../assets/images/forDoctors/Group 1448.png"
import ellipses2 from "../../../assets/images/forDoctors/Ellipse 649.svg"
import docImage1 from "../../../assets/images/forDoctors/image 199.png"
import docImage2 from "../../../assets/images/forDoctors/image 200.png"

import "./style.scss"

function Hero() {
  return (
    <div className="forDoctors-hero">
      <img src={ellipses1} alt="ellipses" />
      <img src={ellipses2} alt="ellipses" />
      <div className="container">
        <div className="forDoctors-hero-row">
          <div className="forDoctors-hero-row-content">
            <h2>Für Ärzte</h2>
            <p>
              „Unsere telemedizinische Lösung schafft einen komplementären
              Service zu der niedergelassenen Gynäkologie und soll langfristig
              einen Beitrag zur medizinischen Versorgung von Frauen leisten. Der
              digitaler Ansatz ist explizit auf die Herausforderungen der
              Gynäkologie ausgerichtet. Wir möchten Arztpraxen unterstützen, in
              dem wir Frauen zwischen den Arztbesuchen begleiten, ihnen mit Rat
              zur Seite stehen und sie an den nächsten Vorsorgetermin erinnern.“
            </p>
            <ArrowButton
              text="Kontaktieren uns"
              color="#fff"
              backgroundColor="#1C2B49"
              union={union}
            />
          </div>
          <div className="forDoctors-hero-row-images">
            <img src={docImage1} alt="hero doctor one" />
          </div>
        </div>
        <img
          className="forDoctors-hero-centerImage"
          src={docImage2}
          alt="hero doctor two"
        />
      </div>
    </div>
  )
}

export default Hero
