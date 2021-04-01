import React from "react"
import ellipses from "../../../../assets/images/faq/ellipses.svg"

import "./style.scss"

function Ellipse() {
  return (
    <div className="faqellipse-wrapper">
      <div className="faqellipse">
        <img className="faqellipse-image" src={ellipses} alt="ellipses" />
        <div className="faqellipse-info">
          <h1 className="faqellipse-info-heading">FAQs</h1>
          <p className="faqellipse-info-description">
            Du hast Fragen zur Verschreibung, zur Medikation, zu deiner
            Privatsphäre, deiner Sicherheit, zur prio.one-Mission und Co.? Wir
            stehen dir gerne Rede und Antwort. Du hast noch mehr Fragen und
            findest hier keine Antwort? Schreib‘ uns: support@prioone.de
          </p>
        </div>
      </div>
    </div>
  )
}
export default Ellipse
