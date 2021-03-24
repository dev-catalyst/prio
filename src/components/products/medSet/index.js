import React from "react"
import medsImage from "../../../assets/images/product/huge meds.png"
import medsBg from "../../../assets/images/product/huge meds bg.svg"

import "./style.scss"

function MedSet() {
  return (
    <div className="products-medset">
      <div className="container">
        <img src={medsImage} alt="medicines" />
      </div>
      <div className="products-medset-lowerbg"></div>
    </div>
  )
}
export default MedSet
