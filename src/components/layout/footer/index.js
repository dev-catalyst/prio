import React from "react"
import PrimaryFooter from "./primaryFooter"
import SecondaryFooter from "./secondaryFooter"
import TopBorderGradient from "./topBorderGradient"
import "./style.scss"

function Footer() {
  return (
    <div className="footer">
      <TopBorderGradient />
      <PrimaryFooter />
      <SecondaryFooter />
    </div>
  )
}

export default Footer
