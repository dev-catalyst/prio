import React from "react"
import ArrowButton from "../../utilities/arrow button"
import girl from "../../../assets/images/faq/ready 1.png"
import girls from "../../../assets/images/faq/ready 2.png"
import union from "../../../assets/images/utilities/Union.svg"
import graph1 from "../../../assets/images/home/graph 3a.svg"
import graph2 from "../../../assets/images/home/graph 3b.svg"
import graph3 from "../../../assets/images/faq/Group 1380.svg"

import "./style.scss"

function Try() {
  return (
    <div className="try">
      <div className="container">
        <div className="try-info">
          <div className="try-info-imageContainer">
            <img
              className="try-info-imageContainer-image"
              src={girl}
              alt="girl"
            /> 
             <img
            className="try-info-imageContainer-graph3"
            src={graph3}
            alt="graph"
          />
            <div className="try-info-imageContainer-graph">
              <div className="try-info-imageContainer-graph-container">
       
                {/* <img
                  className="try-info-imageContainer-graph-container-image2"
                  scr={graph2}
                  alt="graph"
                /> */}
                 
              </div>
            </div>
          </div>
          <div className="try-info-container">
            <h1 className="try-info-container-heading">
              Ready to give us a try?
            </h1>
            <p className="try-info-container-description">
              Juhu! Du bist nur ein paar Schritte vom prioone-versum entfernt:
              Beantworte uns ein paar Fragen zu deiner Gesundheit – unser
              medizinisches Team übernimmt den Rest. Und schon landet deine
              Antibabypille kostenfrei bei dir.
            </p>
            <ArrowButton
              text="Hier geht’s zur Pille"
              color="#fff"
              backgroundColor="#1C2B49"
              union={union}
            />
          </div>
          <div className="try-graph">
            <img className="try-graph-girls" src={girls} alt="girls" />
            <div className="try-graph-container">
              <img
                className="doctor-graph-container-image0"
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
export default Try
