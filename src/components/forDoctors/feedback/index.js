import React from "react"
import phoneImage from "../../../assets/images/forDoctors/Group 1449.svg"
import emailImage from "../../../assets/images/forDoctors/email.svg"
import "./style.scss"

function Feedback() {
  return (
    <div className="forDoctor-feedback">
      <div className="container">
        <h2>Any questions or feedback?</h2>
        <div className="forDoctor-feedback-row">
          <div className="forDoctor-feedback-row-col">
            <img src={phoneImage} alt="phone" />
            <div className="forDoctor-feedback-row-col-content">
              <h5>Telefon</h5>
              <a href="tel:+49 17644472802">+49 17644472802</a>
            </div>
          </div>

          <div className="forDoctor-feedback-row-col">
            <img src={emailImage} alt="email" />
            <div className="forDoctor-feedback-row-col-content">
              <h5>Email</h5>
              <a href="mailto:aerzte@prioone.de">aerzte@prioone.de</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
