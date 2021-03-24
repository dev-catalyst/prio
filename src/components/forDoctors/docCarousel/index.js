import React from "react"
import Slider from "react-slick"
import ProgressBar from "@ramonak/react-progress-bar"
import ellipses from "../../../assets/images/forDoctors/carousel ellipses.svg"
import doc1 from "../../../assets/images/forDoctors/carousel doc 1.png"

import RightArrow from "../../teamCarousel/rightArrow"
import LeftArrow from "./../../teamCarousel/leftArrow"

import "./style.scss"

//  settings for slick carousel
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: "false",
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
}

function DocCarousel() {
  const [currentMember, setCurrentMember] = React.useState(0)

  const percentage = num => {
    const percent = ((num + 1) / data.length) * 100
    return percent
  }

  const handleChange = currentSlide => {
    setCurrentMember(currentSlide)
  }

  return (
    <div className="forDoctors-carousel">
      <img src={ellipses} alt="ellipses" />
      <div className="container">
        <Slider
          className="forDoctors-carousel-slider"
          {...settings}
          afterChange={handleChange}
        >
          {data.map((item, index) => {
            return (
              <div
                key={`${"doc" + index}`}
                className="forDoctors-carousel-slider-content"
              >
                <img src={item.image} alt="member" />
                <div>
                  <p>{item.text}</p>
                  <p>{item.name}</p>
                </div>
              </div>
            )
          })}
        </Slider>
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

export default DocCarousel

// data for carousel
const data = [
  {
    name: "Dr. Dieter Firnrohr, MD",
    image: doc1,
    text:
      "“prio.one’s mission statement aligns well with my private practice. Their use of technology makes for a more efficient patient and provider experience. The prio.one team is also always there to provide prompt support if I need any assistance. I would recommend prio.one to any gynaecologist. This is the women’s healthcare of the future.”",
  },
  {
    name: "Dr. Dieter Firnrohr, MD",
    image: doc1,
    text:
      "“prio.one’s mission statement aligns well with my private practice. Their use of technology makes for a more efficient patient and provider experience. The prio.one team is also always there to provide prompt support if I need any assistance. I would recommend prio.one to any gynaecologist. This is the women’s healthcare of the future.”",
  },
]
