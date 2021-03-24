import React from "react"
import gallery1 from "../../../../assets/images/home/image 219.png"
import gallery2 from "../../../../assets/images/home/image 217.png"
import gallery3 from "../../../../assets/images/home/image 218.png"
import ellipses from "../../../../assets/images/home/ellipses.svg"

import "./style.scss"

function Gallery() {
  return (
    <div className="gallery">
      <img className="gallery-image" src={ellipses} alt="ellipses" />
      <div className="gallery-duo">
        <img className="gallery-duo-image" src={gallery1} alt="duo" />
        <img className="gallery-duo-image" src={gallery2} alt="group" />
      </div>
      <div className="gallery-single">
        <img className="gallery-single-image" src={gallery3} alt="single" />
      </div>
    </div>
  )
}

export default Gallery
