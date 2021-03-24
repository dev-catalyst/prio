import React from "react"
import MemberProfile from "./memberProfiles/index"

import Carousel from "./Carousel/index"
import teamdoc1 from "../../../assets/images/about/image 213.png"
import teamdoc2 from "../../../assets/images/about/image 132.png"
import teamdoc3 from "../../../assets/images/about/image 133.png"
import teamdoc4 from "../../../assets/images/about/teams doc 4.png"

import "./style.scss"

export default function index() {
  const data = [
    {
      image: teamdoc1,
      name: "Prof. Dr. Winfried Rossmanith",
      title: "Klinikum Mittelbaden",
    },
    {
      image: teamdoc2,
      name: "Dr. Dieter Firnrohr",
      title: "Gynaecologist",
    },
    {
      image: teamdoc3,
      name: "Dr. Claudia Mann",
      title: "Gynaecologist",
    },
    {
      image: teamdoc4,
      name: "Prof. Dr. Freimut Leidenberger",
      title: "Professor in Gynaecology and Leading Author in Endocrinology",
    },
  ]

  return (
    <div className="other-members">
      <div className="container">
        <div className="other-members-content">
          <h4>Unser medizinischer Beirat</h4>
        </div>
        <div className="member-wrapper">
          <MemberProfile
            src={data[0].image}
            name={data[0].name}
            title={data[0].title}
          />
          <MemberProfile
            src={data[1].image}
            name={data[1].name}
            title={data[1].title}
          />
          <MemberProfile
            src={data[2].image}
            name={data[2].name}
            title={data[2].title}
          />
          <MemberProfile
            src={data[3].image}
            name={data[3].name}
            title={data[3].title}
          />
        </div>
        <div className="others-carousel">
          <Carousel data={data} />
        </div>
      </div>
    </div>
  )
}
