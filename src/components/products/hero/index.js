import React from "react"
import ArrowButton from "../../utilities/arrow button"
import union from "../../../assets/images/utilities/Union.svg"
import meds from "../../../assets/images/product/hero meds.png"
import medsPhone from "../../../assets/images/product/hero meds phone.png"
import graph from "../../../assets/images/product/hero graph.svg"
import graphPhone from "../../../assets/images/product/hero graph phone.png"
import listImage1 from "../../../assets/images/product/hero zum.svg"
import listImage2 from "../../../assets/images/product/hero inklusive.svg"
import listImage3 from "../../../assets/images/product/hero und.svg"

import "./style.scss"

function Hero() {
  return (
    <div className="products-hero">
      <div className="container">
        <div className="products-hero-content">
          <h1 className="products-hero-header">
            Deine Antibabypille - Bequem online verschrieben. Zu dir nach Hause
            geliefert.
          </h1>
          <ul className="products-hero-content-list">
            <li>
              <img src={listImage1} alt="Zum" />
              <p>Zum Antibabypillen-Rezept in nur 5 Minuten.</p>
            </li>
            <li>
              <img src={listImage2} alt="Inklusive" />
              <p>Inklusive Goodies für die schönsten prio.one-Momente.</p>
            </li>
            <li>
              <img src={listImage3} alt="Und" />
              <p>Und all das für 6,90 € (zzgl. Medikamentenpreis)</p>
            </li>
          </ul>
          <div className="products-hero-content-image">
            <img src={medsPhone} alt="hand" />
            <img src={graphPhone} alt="graph" />
          </div>
          <ArrowButton
            text="Hier geht’s zur Pille"
            color="#fff"
            backgroundColor="#1C2B49"
            union={union}
          />
        </div>
        <img className="products-hero-image" src={meds} alt="hand" />
        <img className="products-hero-graph" src={graph} alt="graph" />
        <div className="products-hero-background"></div>
      </div>
    </div>
  )
}

export default Hero
