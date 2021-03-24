import React from "react"
import graph from "../../../../assets/images/home/graph 2.svg"

import "./style.scss"

function Values() {
  return (
    <div className="values">
      <img className="values-graph" src={graph} alt="graph 1" />
      <div className="values-information">
        <h4 className="values-information-subtitle">Our Values</h4>
        <h2 className="values-information-title">Wofür wir stehen</h2>
        <p className="values-information-description">
          Wir stehen für eine innovative Gesundheitsversorgung und sprechen
          dabei die Gesundheitsprobleme der Frauen ganz offen an. Es ist unser
          Ziel, die Lebensquaität der Frau zu verbessern, nicht nur in
          Deutschland sondern weltweit. So engageieren wir uns zum Beipiel mit
          unserem Partner Plan International für sexuelle und reproduktive
          Aufklärung in Afrika.
        </p>
      </div>
    </div>
  )
}

export default Values
