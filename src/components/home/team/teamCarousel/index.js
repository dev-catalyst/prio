import React from "react"
import Slider from "react-slick"
import ProgressBar from "@ramonak/react-progress-bar"

import RightArrow from "./rightArrow"
import LeftArrow from "./leftArrow"

import member1 from "../../../../assets/images/home/member1.png"
// import member2 from "../../../../assets/images/home/member2.png"

import "./style.scss"

//  settings for slick carousel
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "25%",
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        centerPadding: "10%",
      },
    },
  ],
}

// utility function
const percentage = num => {
  const percent = ((num + 1) / members.length) * 100
  return percent
}

function TeamCarousel() {
  const [currentMember, setCurrentMember] = React.useState(0)

  const handleChange = currentSlide => {
    setCurrentMember(currentSlide)
    console.log(currentSlide)
  }

  return (
    <div className="teamCarousel">
      <Slider
        className="teamCarousel-slider"
        {...settings}
        afterChange={handleChange}
      >
        {members.map((data, index) => {
          return (
            <div
              key={`${"member" + index}`}
              className="teamCarousel-slider-card"
            >
              <img src={data.image} alt="member" />
            </div>
          )
        })}
      </Slider>
      {/* <div className="teamCarousel-cover"></div> */}
      <div className="teamCarousal-progress">
        <ProgressBar
          completed={percentage(currentMember)}
          width="100%"
          height="6px"
          baseBgColor="rgba(218, 164, 154, 0.3)"
          bgcolor="#C25A3F"
          isLabelVisible={false}
        />
      </div>
    </div>
  )
}

export default TeamCarousel

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
