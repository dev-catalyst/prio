import React from "react"
import ArrowButton from "../../../utilities/arrow button"
import union from "../../../../assets/images/utilities/Union2.svg"

import "./style.scss"

function information() {
  return (
    <div className="information">
      <div className="information-info">
        <h4 className="information-info-subtitle">FÜRSORGE IN UNSERER DNA</h4>
        <h2 className="information-info-title">
          Die Priorität unseres Team: du und deine Gesundheit!
        </h2>
        <p className="information-info-description">
          Um die gynäkologische Versorgung der Frau kontinuierlich zu
          verbessern, besteht prio.one aus einem multidisziplinären Team aus
          Digital- und PharmaexpertInnen, GynäkologInnen, Data Scientists und
          Softwareentwicklern.
        </p>
        <ArrowButton
          text="Triff' das Team"
          paddingRight="120px"
          color="#C25A3F"
          backgroundColor="rgba(218,164,154,0.3)"
          union={union}
        />
      </div>
    </div>
  )
}

export default information
