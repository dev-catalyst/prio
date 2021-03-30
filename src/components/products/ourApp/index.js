import React from "react"
import phone from "../../../assets/images/product/phone.png"
import wave from "../../../assets/images/product/our app wave.svg"

import "./style.scss"

function OurApp() {
  return (
    <div className="products-app">
      <div className="container">
        <div className="products-app-content">
          <img src={phone} alt="Hello Rachel" />
          <div>
            <img src={wave} alt="wave" />
            <h2>
              Our Gynaecological
              <br />
              prio.one App
            </h2>
            <p>
              The prio.one app doesn’t only provide you with a daily pill
              reminder – you will also get to know your body in a completely new
              way!
            </p>
            <p>
              Track your daily physical conditions and emotional state to
              receive personalized health recommendations. Through your birth
              control prescription, you receive exclusive access to the prio.one
              app – free of charge, of course.
            </p>
          </div>
        </div>
        <div className="products-app-layer"></div>
      </div>
    </div>
  )
}

export default OurApp
