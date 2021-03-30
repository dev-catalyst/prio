import React from "react"
import brandsGroup from "../../../assets/images/product/brandsGroup.png"
import brandsGroupPhone from "../../../assets/images/product/brandsGroupPhone.png"
import ArrowButton from "../../utilities/arrow button"
import union from "../../../assets/images/utilities/Union2.svg"

import "./style.scss"

function Brands() {
  return (
    <div className="products-brands">
      <div className="products-brands-image">
        <img src={brandsGroup} alt="brands" />
        <img src={brandsGroupPhone} alt="brands" />
      </div>
      <div className="products-brands-information">
        <p>YOUR BODY, YOUR CHOICE</p>
        <h2>Du hast die Wahl - über 120 zugelassene Marken</h2>
        <p>
          prio.one - der goldene Weg zu der fur dich passenden Antibabypille. Du
          willst mehr zu allen gelisteten Marken erfahren. Hier findest du
          Informationen zu uber 32 Herstellern.
        </p>
        <ArrowButton
          text="Zu den Marken"
          paddingRight="120px"
          color="#C25A3F"
          backgroundColor="rgba(218,164,154,0.3)"
          union={union}
        />
      </div>
    </div>
  )
}

export default Brands
