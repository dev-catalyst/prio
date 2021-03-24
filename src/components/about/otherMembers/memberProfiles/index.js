import React from "react"

import "./style.scss"

export default function index(props) {
  return (
    <div className="member-card">
      <img src={props.src} alt="" />
      <p className="designation">{props.title}</p>
      <p className="name">{props.name}</p>
    </div>
  )
}
