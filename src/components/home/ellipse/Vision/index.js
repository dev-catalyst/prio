import React from "react"
import graph from "../../../../assets/images/home/graph 1.svg"

import "./style.scss"

function Vision() {
  return (
    <div className="vision">
      <img className="vision-graph" src={graph} alt="graph 1" />
      <div className="vision-information">
        <h4 className="vision-information-subtitle">
          Healthcare of the future
        </h4>
        <h2 className="vision-information-title">Unsere Vision</h2>
        <p className="vision-information-description">
          Prio.one revolutioniert die Behandlung von hormonell-bedingten
          Beschwerden der Frau. Unsere telemedizinische Plattform und die
          prio.one App verbessert die gesundheitliche, gynäkologische Versorgung
          der Frau und generiert langfristig therapeutischen Mehrwert.
        </p>
      </div>
    </div>
  )
}

export default Vision
