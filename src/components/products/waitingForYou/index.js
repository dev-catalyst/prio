import React from "react"
import waiting1 from "../../../assets/images/product/waiting 1.svg"
import waiting2 from "../../../assets/images/product/waiting 2.svg"
import waiting3 from "../../../assets/images/product/waiting 3.svg"
import waiting4 from "../../../assets/images/product/waiting 4.svg"
import waiting5 from "../../../assets/images/product/waiting 5.svg"
import waiting6 from "../../../assets/images/product/waiting 6.svg"

import "./style.scss"

function WaitingForYou() {
  return (
    <div className="products-waiting">
      <div className="container">
        <div className="products-waiting-info">
          <h2>Was dich erwartet</h2>
          <p>
            Every month you will receive your birth control pills in a
            discreetly packaged box, along with a set of handpicked goodies
            designed for a personalised self-care experience.
          </p>
        </div>
        <ul>
          <li>
            <img src={waiting1} alt="logo" />
            Deine Antibabypille
          </li>
          <li>
            <img src={waiting2} alt="logo" />
            Eine diskrete Verpackung
          </li>
          <li>
            <img src={waiting3} alt="logo" />
            Kostenfreie Lieferung
          </li>
        </ul>
        <ul>
          <li>
            <img src={waiting4} alt="logo" />
            Qualitative Pflegeprodukte
          </li>
          <li>
            <img src={waiting5} alt="logo" />
            Eine suse Uberraschung
          </li>
          <li>
            <img src={waiting6} alt="logo" />
            Exclusive Sticker
          </li>
        </ul>
      </div>
    </div>
  )
}

export default WaitingForYou
