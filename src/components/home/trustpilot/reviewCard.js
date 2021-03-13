import React from "react"
import star from "../../../assets/images/home/star.svg"

export const ReviewCard = props => {
  const rating = []

  for (let i = 1; i <= props.rating; i++) {
    rating.push(<img width="18" src={star} alt="rating" key={i} />)
  }

  return (
    <div className="trustpilot-review">
      <div className="trustpilot-review-bg">
        <div className="rating">{rating}</div>
        <h4>{props.heading}</h4>
        <p>{props.comment}</p>
      </div>
      <div className="rating-user-info">
        {
            props.avtar && <img src={props.avtar} alt="pic" />
        }
        <div className="user-name-and-rating">
            <h5>{props.name}</h5>
            <small>{props.date}</small>
        </div>
      </div>
    </div>
  )
}
