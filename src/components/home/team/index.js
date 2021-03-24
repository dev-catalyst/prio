import React from "react"
import Information from "./information"
import TeamCarousel from "../../teamCarousel"

import member1 from "../../../assets/images/home/member1.png"

import "./style.scss"

function Team() {
  return (
    <div className="team">
      <div className="container">
        <Information />
        <TeamCarousel data={members} />
      </div>
    </div>
  )
}

export default Team

// data for carousel
const members = [
  {
    image: member1,
  },
  {
    image: member1,
  },
  {
    image: member1,
  },
  {
    image: member1,
  },
]
