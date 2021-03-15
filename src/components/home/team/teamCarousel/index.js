import React from "react"
import Slider from "react-slick"
import ProgressBar from "@ramonak/react-progress-bar"

import leftArrow from "../../../../assets/images/home/left-arrow.svg"
import rightArrow from "../../../../assets/images/home/right-arrow.svg"

import member1 from "../../../../assets/images/home/member1.png"
import member2 from "../../../../assets/images/home/member2.png"

import "./style.scss"

const RightArrow = ({ className, style, onClick }) => (
  <div
    className="team-right-arrow"
    style={{
      ...style,
      position: "absolute",
      bottom: "0",
      transform: "translateX(100%) translateY(200%)",
      left: "135px",
      width: "60px",
      height: "60px",
      cursor: "pointer",
      backgroundColor: "#transparent",
      zIndex: "10",
      borderRadius: "100%",
      border: "2px solid #C25A3F",
    }}
    onClick={onClick}
  >
    <img
      src={rightArrow}
      style={{
        transform: "translateX(40%) translateY(35%)",
      }}
    />
  </div>
)

const LeftArrow = ({ className, style, onClick }) => (
  <div
    className="team-left-arrow"
    style={{
      ...style,
      position: "absolute",
      bottom: "0",
      transform: "translateX(150%) translateY(200%)",
      left: "30px",
      width: "60px",
      height: "60px",
      cursor: "pointer",
      backgroundColor: "transparent",
      zIndex: "10",
      borderRadius: "100%",
      border: "2px solid #C25A3F",
    }}
    onClick={onClick}
  >
    <img
      src={leftArrow}
      style={{
        transform: "translateX(35%) translateY(35%)",
      }}
    />
  </div>
)

//  SETTINGS FOR REACT SLICK CAROUSAL
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
      breakpoint: 1170,
      settings: {
        // centerMode: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        // centerMode: true,
      },
    },
  ],
}

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

const percentage = num => {
  const percent = ((num + 2) / members.length) * 100
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
