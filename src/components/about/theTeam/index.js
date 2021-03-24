import React from "react"
import Carousel from "./Carousel/index"

import member1 from "../../../assets/images/about/teams member 1.png"
import member2 from "../../../assets/images/about/teams member 2.png"
import member3 from "../../../assets/images/about/teams member 3.png"
import member4 from "../../../assets/images/about/teams member 4.png"

import "./style.scss"

const members = [
  {
    image: member1,
    title: "Co-Founder, Product & Marketing",
    name: "Claas Herbold",
  },
  {
    image: member2,
    title: "Co-Founder, Healthcare & Pharma",
    name: "Jan Mehner",
  },
  {
    image: member3,
    title: "Business Development",
    name: "Lisa Schäfer",
  },
  {
    image: member4,
    title: "Business Development",
    name: "Miriam Trocha",
  },
  {
    image: member1,
    title: "Co-Founder, Healthcare & Pharma",
    name: "Jan Mehner",
  },
  {
    image: member3,
    title: "Business Development",
    name: "Lisa Schäfer",
  },
  {
    image: member2,
    title: "Co-Founder, Healthcare & Pharma",
    name: "Jan Mehner",
  },
]

export default function index() {
  return (
    <div className="theTeam">
      <div className="container">
        <div className="theTeam-content">
          <h4>The team</h4>
          <Carousel data={members} />
        </div>
      </div>
    </div>
  )
}
