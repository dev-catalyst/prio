import React from "react"
import Reason from "./reason"
import phoneAndBox from "../../../assets/images/product/grunde phone and box.png"
import howAreYouFeeling from "../../../assets/images/product/grunde how are you feeling.png"
import ellipses from "../../../assets/images/product/reasons ellipses.svg"

import "./style.scss"

function Reasons() {
  return (
    <div className="products-reasons">
      <div className="container">
        <h2>Warum prio.one? 6 Gründe:</h2>
        <div className="products-reasons-content">
          <div className="products-reasons-content-points">
            <Reason
              count="01"
              header="Über 120 Pillen-Marken."
              text="Über 120 zugelassene Marken zu den niedrigsten Preisen – wie in der Apotheke deines Vertrauens."
            />
            <Reason
              count="02"
              header="Bequeme Nachlieferung."
              text="Ein kleiner Reminder, ein neuer Fragebogen und der Refill kommt sofort."
            />
            <Reason
              count="03"
              header="Kostenfrei und diskret geliefert…"
              text="… und ein paar kleine Überraschungen extra für dich gibt’s oben drauf!"
            />
          </div>
          <div>
            <img src={phoneAndBox} alt="phone and box" />
            <img src={ellipses} alt="background ellipses" />
          </div>
        </div>
        <div className="products-reasons-content">
          <div className="products-reasons-content-points">
            <Reason
              count="04"
              header="prio.one App."
              text="Erhalte personalisierte Gesundheitsempfehlungen und lerne deinen Körper neu kennen."
            />
            <Reason
              count="05"
              header="Kostenloser Ärzte-Chat."
              text="Kontaktiere jederzeit unser gynäkologisches Team über unseren Chat."
            />
            <Reason
              count="06"
              header="Social Impact"
              text="Mit jeder Bestellung spenden wir 1,5€ an ein Frauengesundheitsprojekt in Malawi."
            />
          </div>
          <div>
            <img src={howAreYouFeeling} alt="how are you feeling" />
            <img src={ellipses} alt="background ellipses" />
          </div>
        </div>
      </div>
      <img src={ellipses} alt="background ellipses" />
    </div>
  )
}

export default Reasons
