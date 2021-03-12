import React from "react"
import Heading from "../../utilities/heading"
import ArrowButton from "../../utilities/arrow button"
import doctor from "../../../assets/images/home/image 211.png"
import doctors from "../../../assets/images/home/image 200.png"
import graph1 from "../../../assets/images/home/graph 3a.svg"
import graph2 from "../../../assets/images/home/graph 3b.svg"

import "./style.scss"

function Doctor() {
  return (
    <div className="doctor">
      <div className="container">
        <div className="doctor-info">
          <img src={doctor} alt="doctor" />
          <div className="doctor-info-container">
            <Heading text="Für Ärzte" color="#1C2B49" size="42px" />
            <p className="doctor-info-container-description">
              Unsere telemedizinische Lösung schafft einen komplementären
              Service zu der niedergelassenen Gynäkologie und soll langfristig
              einen Beitrag zur medizinischen Versorgung von Frauen leisten.
              Unser digitaler Ansatz ist daher explizit auf die
              Herausforderungen der Gynäkologie ausgerichtet.
            </p>
            <ArrowButton
              text="Doctor's Page"
              paddingRight="120px"
              backgroundColor="#1C2B49"
            />
          </div>
        </div>
        <div className="doctor-graph">
          <img src={doctors} alt="doctor" />
          <div className="doctor-graph-container">
            <img
              className="doctor-graph-container-image1"
              src={graph1}
              alt="graph"
            />
            <img
              className="doctor-graph-container-image2"
              src={graph2}
              alt="graph"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor
