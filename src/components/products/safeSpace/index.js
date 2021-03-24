import React from "react"
import feed from "../../../assets/images/product/feed.png"
import graph from "../../../assets/images/product/safeGraph.svg"

import "./style.scss"

function SafeSpace() {
  return (
    <div className="products-safe">
      <div className="container">
        <div className="products-safe-information">
          <p>EXCLUSIVE FEATURE: COMMUNITY</p>
          <h2>Be part of a safe space for female health</h2>
          <p>
            Additionally, to your pill, you will get access to a safe and open
            community space focused on female health issues. Connect with other
            women facing the same issues. Nothing is too small or taboo to be
            discussed.
          </p>
        </div>
        <img src={feed} alt="feed" />
      </div>
      <img src={graph} alt="graph" />
    </div>
  )
}

export default SafeSpace
