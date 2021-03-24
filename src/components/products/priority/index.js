import React from "react"
import TeamCarousel from "../../teamCarousel"
import doc from "../../../assets/images/product/doc.png"
import ArrowButton from "../../utilities/arrow button"
import union from "../../../assets/images/utilities/Union2.svg"

import "./style.scss"

function Priority() {
  return (
    <div className="products-priority">
      <div className="container">
        <div className="products-priority-information">
          <p>FÜRSORGE IN UNSERER DNA</p>
          <h2>Unsere oberste Priorität: du und deine Gesundheit!</h2>
          <p>
            Jahrelange Erfahrung ist es, die den Rund-um-Sorglos-Service unseres
            medizinischen Teams ermöglicht: über 10.000 Patientinnen hilft das
            Team jedes Jahr. Und wir sind nur eine Nachricht entfernt! Wir haben
            ein offenes Ohr – für deine Periode, deine Nachwuchspläne, deine
            Nebenwirkungen… und freuen uns immer über einen prall gefüllten
            Briefkasten.
          </p>
          <ArrowButton
            text="Triff' das Team"
            paddingRight="120px"
            color="#C25A3F"
            backgroundColor="rgba(218,164,154,0.3)"
            union={union}
          />
        </div>

        <TeamCarousel data={data} />
      </div>
    </div>
  )
}

export default Priority

// data for carousel
const data = [
  {
    image: doc,
  },
  {
    image: doc,
  },
  {
    image: doc,
  },
  {
    image: doc,
  },
]
