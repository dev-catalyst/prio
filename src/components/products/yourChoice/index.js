import React from "react"
import ArrowButton from "../../utilities/arrow button"
import wave from "../../../assets/images/product/your choice.svg"
import union from "../../../assets/images/utilities/Union.svg"

import "./style.scss"

function YourChoice() {
  return (
    <div className="products-yourChoice">
      <div className="products-yourChoice-content">
        <h2 className="products-yourChoice-content-header">
          Bereit die Kontrolle zu übernehmen? Your body, your choice. Nimm‘ dir
          ein paar Minuten Zeit für unseren Gesundheitsfragebogen.
        </h2>
        <div>
          <ArrowButton
            text="Hier geht’s zur Pille"
            color="#fff"
            backgroundColor="#1C2B49"
            union={union}
          />
        </div>
        <img
          className="products-yourChoice-content-image"
          src={wave}
          alt="your choice wave"
        />
      </div>
    </div>
  )
}

export default YourChoice
