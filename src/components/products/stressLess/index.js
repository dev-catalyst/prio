import React from "react"
import stressLess1 from "../../../assets/images/product/stress less 1.svg"
import stressLess2 from "../../../assets/images/product/stress less 2.svg"
import stressLess3 from "../../../assets/images/product/stress less 3.svg"
import graph from "../../../assets/images/product/stress less graph.svg"

import "./style.scss"

function StressLess() {
  return (
    <div className="products-stress">
      <div className="container">
        <h2>Love more, stress less. So geht’s</h2>
        <div className="products-stress-points">
          <div>
            <div>
              <h1>01</h1> <img src={stressLess1} alt="logo" />
            </div>
            <h4>Ein paar Minuten für deine Gesundheit.</h4>
            <p>
              Schon unseren Fragebogen ausgefüllt? 20 Fragen, weniger als 5
              Minuten: Wähle deine Pille des Vertrauens – oder du überlässt uns
              die Suche nach der zu dir passenden Antibabypille.
            </p>
          </div>
          <div>
            <div>
              <h1>02 </h1>
              <img src={stressLess2} alt="logo" />
            </div>
            <h4>Gesucht - gefunden - geliefert.</h4>
            <p>
              Du qualifizierst dich für ein Rezept? Sobald du deine
              Antibabypille gewählt hast, kann’s losgehen: Die Lieferung findest
              du schon bald mit coolen Goodies in deinem Briefkasten.
            </p>
          </div>
          <div>
            <div>
              <h1>03 </h1>
              <img src={stressLess3} alt="logo" />
            </div>
            <h4>Just relax: bequem nachversorgt.</h4>
            <p>
              Hat da jemand „bequem“ gesagt? ROMY hat deinen Pillen-Bestand im
              Blick: Wenn’s eng wird, einfach schnell den Fragebogen ausfüllen –
              und Nachschub naht sofort.
            </p>
          </div>
        </div>
      </div>
      <img src={graph} alt="stress less wave" />
    </div>
  )
}

export default StressLess
