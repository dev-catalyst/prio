import React from "react"
import Slider from "react-slick"
import ProgressBar from "@ramonak/react-progress-bar"

import RightArrow from "./rightArrow"
import LeftArrow from "./leftArrow"

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
        centerPadding: "12%",
      },
    },
  ],
}

function TeamCarousel({ data }) {
  const [currentMember, setCurrentMember] = React.useState(0)

  const percentage = num => {
    const percent = ((num + 1) / data.length) * 100
    return percent
  }

  const handleChange = currentSlide => {
    setCurrentMember(currentSlide)
  }

  return (
    <div className="teamCarousel">
      <Slider
        className="teamCarousel-slider"
        {...settings}
        afterChange={handleChange}
      >
        {data.map((item, index) => {
          return (
            <div
              key={`${"member" + index}`}
              className="teamCarousel-slider-card"
            >
              <img src={item.image} alt="member" />
            </div>
          )
        })}
      </Slider>
      {/* <div className="teamCarousel-cover"></div> */}
      <div className="teamCarousal-progress">
        <ProgressBar
          completed={percentage(currentMember)}
          width="100%"
          height="4px"
          baseBgColor="rgba(218, 164, 154, 0.3)"
          bgcolor="#C25A3F"
          isLabelVisible={false}
        />
      </div>
    </div>
  )
}

export default TeamCarousel
