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
    <div className="category-carousel self-category-carousel next-category-carousel">
      <div className="container">
        <h2>Self-care</h2>
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
              <span className="category-name-wrapper self-care-btn">SELF-CARE</span>
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
    title: "Endlich Zeit – für me, myself and I",
    image: doc1,
    content:
      "Ein bisschen Me-Time – wir haben hier unsere Top 5, um dir selbst auch einfach mal wieder etwas Gutes zu tun.",
  },
  {
    title: "Periodenzeit = dunkle bunte Zeit!",
    image: doc1,
    content:
      "Wir malen uns die Welt lieber bunt, packen einen farbenfrohen Soundtrack unseres Lebens auf die Lautsprecher und genießen diese 7 Tage.",
  },
  {
    title: "How To: Der einfache Weg zum Pillenrezept",
    image: doc1,
    content:
      "Von wegen verrückter Tempel mit verrückterem Labyrinth – bei uns kommst du ganz einfach zum Ziel: Dein Rezept für die Antibabypille bekommst.",
  },
  {
    title: "Endlich Zeit – für me, myself and I 2",
    image: doc1,
    content:
      "Ein bisschen Me-Time – wir haben hier unsere Top 5, um dir selbst auch einfach mal wieder etwas Gutes zu tun.",
  },
]
