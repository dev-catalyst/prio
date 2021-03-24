import React from "react"

import Slider from "react-slick"
import ProgressBar from "@ramonak/react-progress-bar"

import "./style.scss"

var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.5,
  slidesToScroll: 1,
}

function TeamCarousel({ data }) {
  const [currentMember, setCurrentMember] = React.useState(0)

  const percentage = num => {
    const percent = ((num + 1) / data.length) * 100
    return percent
  }

  const handleChange = currentSlide => {
    setCurrentMember(currentSlide)
    console.log(currentSlide)
  }

  return (
    <div className="others-team-about-Carousel">
      <div className="teamCarousal-about-progress">
        <ProgressBar
          completed={percentage(currentMember)}
          width="100%"
          height="4px"
          baseBgColor="rgba(218, 164, 154, 0.3)"
          bgcolor="#C25A3F"
          isLabelVisible={false}
        />
      </div>
      <Slider
        className="team-about-Carousel-slider"
        {...settings}
        afterChange={handleChange}
      >
        {data.map((item, index) => {
          return (
            <div
              key={`${"member" + index}`}
              className="team-about-Carousel-slider-card"
            >
              <img src={item.image} alt="member" />
              <p className="title">{item.title}</p>
              <p className="name">{item.name}</p>
            </div>
          )
        })}
      </Slider>
      {/* <div className="teamCarousel-cover"></div> */}
    </div>
  )
}

export default TeamCarousel
