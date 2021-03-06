import React from "react"
import Information from "./information"
import TeamCarousel from "./teamCarousel"

import "./style.scss"

function Team() {
  return (
    <div className="team">
      <div className="container">
        <Information />
        <TeamCarousel />
      </div>
    </div>
  )
}

export default Team
