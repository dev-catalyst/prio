import React from "react"
import Heading from "../../utilities/heading"
import ArrowButton from "../../utilities/arrow button"
import doctor from "../../../assets/images/home/image 211.png"
import doctors from "../../../assets/images/home/image 200.png"
import graph1 from "../../../assets/images/home/graph 3a.svg"
import graph2 from "../../../assets/images/home/graph 3b.svg"
import union from "../../../assets/images/utilities/Union.svg"

import "./style.scss"

function Doctor() {
  return (
    <div className="doctor">
      <div className="container">
        <div className="doctor-info">
          <div className="doctor-info-imageContainer">
            <img
              className="doctor-info-imageContainer-image"
              src={doctor}
              alt="doctor"
            />
            <div className="doctor-info-imageContainer-graph">
              <div className="doctor-info-imageContainer-graph-container">
                <img
                  className="doctor-info-imageContainer-graph-container-image1"
                  src={graph1}
                  alt="graph"
                />
                <img
                  className="doctor-info-imageContainer-graph-container-image2"
                  src={graph2}
                  alt="graph"
                />
              </div>
            </div>
          </div>
          <div className="doctor-info-container">
            <h1 className="doctor-info-container-heading">Für Ärzte</h1>
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
              color="#fff"
              backgroundColor="#1C2B49"
              union={union}
            />
          </div>

          <div className="doctor-graph">
            <img className="doctor-graph-doctors" src={doctors} alt="doctor" />
            <div className="doctor-graph-container">
              <img
                className="doctor-graph-container-image0"
                src={graph1}
                alt="graph"
              />
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
    </div>
  )
}

export default Doctor
