import React from "react"
import TeamCarousel from "../../teamCarousel"
import plan from "../../../assets/images/product/plan international.svg"
import empowered from "../../../assets/images/product/empowered.png"

import "./style.scss"

function PlanInternational() {
  return (
    <div className="products-plan">
      <div className="container">
        <div className="products-plan-image">
          {/* <img src={plan} alt="plan international" /> */}
          <object data={plan}></object>
        </div>
        <div className="products-plan-content">
          <div className="products-plan-content-information">
            <p>SOCIAL IMPACT</p>
            <h2>
              Mit jeder Bestellung spenden wir 1,50 EUR an ein
              Frauengesundheits&shy;projekt in Malawi.
            </h2>
            <p>
              Plan International has a bold new ambition to work with 100
              million girls over the next 5 years to transform their lives by
              supporting them to learn, lead, decide and thrive.
            </p>
            <p>
              When girls, young people and activists come together to take
              collective action as civil society, they are better able to demand
              and influence change. We focus our efforts on equality, inclusion
              and diversity.{" "}
            </p>
          </div>

          <TeamCarousel data={data} />
        </div>
      </div>
    </div>
  )
}

export default PlanInternational

// data for carousel
const data = [
  {
    image: empowered,
  },
  {
    image: empowered,
  },
  {
    image: empowered,
  },
  {
    image: empowered,
  },
]
