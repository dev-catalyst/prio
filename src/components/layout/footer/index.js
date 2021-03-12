import React from "react"
import PrimaryFooter from "./primaryFooter"
import SecondaryFooter from "./secondaryFooter"
import TopBorderGradient from "./topBorderGradient"
import "./style.scss"

function footer() {
  return (
    <div className="footer">
      <TopBorderGradient />
      <PrimaryFooter />
      <SecondaryFooter />
    </div>
  )
}

export default footer
