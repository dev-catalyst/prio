import React from "react"
import Vision from "./Vision"
import Gallery from "./Gallery"
import Values from "./Values"
// import ellipse1 from "../../../assets/images/home/Ellipse 648.png"
// import ellipse2 from "../../../assets/images/home/Ellipse 649.png"
// import ellipses from "../../../assets/images/home/Ellipses.png"

import "./style.scss"

function Ellipse() {
  return (
    <div id="section2" className="ellipse">
      <div className="container">
        {/* <img className="ellipse-image" src={ellipse1} alt="ellipse1" />
        <img className="ellipse-image" src={ellipse2} alt="ellipse2" />
        <img className="ellipse-image" src={ellipses} alt="ellipses" /> */}
        <Vision />
        <Gallery />
        <Values />
      </div>
    </div>
  )
}

export default Ellipse
