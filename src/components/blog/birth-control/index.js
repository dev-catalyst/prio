import React from "react"
import Slider from "react-slick"
//import ProgressBar from "@ramonak/react-progress-bar"
import doc1 from "../../../assets/images/forDoctors/carousel doc 1.png"

import RightArrow from "../../teamCarousel/rightArrow"
import LeftArrow from "../../teamCarousel/leftArrow"

//import "./style.scss"

//  settings for slick carousel
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: "false",
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "0",
      },
    },
  ],
}

function CategoryCarousel() {
  const [currentMember, setCurrentMember] = React.useState(0)

  const percentage = num => {
    const percent = ((num + 1) / data.length) * 100
    return percent
  }

  const handleChange = currentSlide => {
    setCurrentMember(currentSlide)
  }

  return (
    <div className="category-carousel">
      <div className="container">
        <h2>Birth Control</h2>
        <div className="category-carousel-row">
        <Slider
          className="category-carousel-slider"
          {...settings}
          afterChange={handleChange}
        >
          {data.map((item, index) => {
            return (
              <div
                key={`${"doc" + index}`}
                className="three-featured-post-row category-carousel-slider-content"
              >            
                <div className="img-hover-wrapper">
              <img src={item.image} alt=""/> 
              </div>
              <div className="three-featured-post-content">
              <span className="category-name-wrapper birth-control-btn">BIRTH CONTROL</span>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              </div>
              </div>
            )
          })}
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default CategoryCarousel

// data for carousel
const data = [
  {
    title: "Verhüten nach der Schwangerschaft",
    image: doc1,
    content:
      "Wie funktioniert das Verhüten nach der Schwangerschaft? Was geht, was geht nicht? Wir klären auf.",
  },
  {
    title: "„Bekommst du deine Tage oder wieso bist du so schlecht drauf?“",
    image: doc1,
    content:
      "Wir haben ein paar Tipps und Tricks, wie du dir auch während deiner Periode treu bleiben kannst und deine Selbstliebe nicht für 7 Tage.",
  },
  {
    title: "Pille auf den ersten Griff – wo bewahre ich meinen Blister auf?",
    image: doc1,
    content:
      "Damit die Suche nicht zum ewigen Akt wird, haben wir mal herumgefragt und die liebsten Ablageorte unserer Clubmitgliederinnen für euch.",
  },
  {
    title: "Verhüten nach der Schwangerschaft 2",
    image: doc1,
    content:
      "Wie funktioniert das Verhüten nach der Schwangerschaft? Was geht, was geht nicht? Wir klären auf.",
  },
]
