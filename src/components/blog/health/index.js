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
    <div className="category-carousel next-category-carousel">
      <div className="container">
        <h2>Health</h2>
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
              <span className="category-name-wrapper">HEALTH</span>
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
    title: "Akne-Geheimwaffe Antibabypille?",
    image: doc1,
    content:
      "Hautunreinheiten – manche haben sie nach der Pubertät abgeschüttelt bekommen, manche begleiten sie noch immer. ",
  },
  {
    title: "All About: Der weibliche Zyklus",
    image: doc1,
    content:
      "Wie ticken wir Frauen und unsere Körper eigentlich? Um uns, unsere Launen und unsere Sexualität besser zu begreifen, lohnt sich ein genauer Lupenblick.",
  },
  {
    title: "Migräne – wenn die Blitze durch den Schädel schießen",
    image: doc1,
    content:
      "Was hormonelle Veränderungen während der Periode mit Migräneattacken zu tun haben und was da genau im Körper ins Ungleichgewicht.",
  },
  {
    title: "Akne-Geheimwaffe Antibabypille? 2",
    image: doc1,
    content:
      "Hautunreinheiten – manche haben sie nach der Pubertät abgeschüttelt bekommen, manche begleiten sie noch immer.",
  },
]
