import React from "react"
import gallery1 from "../../../assets/images/about/teams gallery 1.png"
import gallery2 from "../../../assets/images/about/teams gallery 2.png"
import gallery3 from "../../../assets/images/about/teams gallery 3.png"
import ellipses from "../../../assets/images/about/ellipses.svg"

import "./style.scss"

function Gallery() {
  return (
    <div className="gallery">
      <div className="container">
        {/* <img className="gallery-about-image" src={ellipses} alt="ellipses" /> */}
        <div className="gallery-image-container">
          <div className="gallery-duo">
            <img className="gallery-duo-image" src={gallery1} alt="duo" />
            <img className="gallery-duo-image" src={gallery2} alt="group" />
          </div>
          <div className="gallery-single">
            <img className="gallery-single-image" src={gallery3} alt="single" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
