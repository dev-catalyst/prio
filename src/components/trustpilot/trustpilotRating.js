import React from "react"
import star from "../../assets/images/home/5-star.svg"
import truspilotLogo from "../../assets/images/home/trustpilot-logo.svg"

export const TrustPilotRating = () => {
  return (
    <div className="trustpilot-rating">
      <h3>Excellent</h3>
      <img width="200" src={star} alt="5star" />
      <p>
        Based on <a href="#">2,350 reviews</a>
      </p>
      <img width="150" src={truspilotLogo} alt="truspilot-logo" />
    </div>
  )
}
