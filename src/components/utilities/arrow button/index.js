import React from "react"
import { Button } from "@react-md/button"

import "./style.scss"

function ArrowButton(props) {
  return (
    <div className="arrowButton">
      <Button
        id="arrowButton"
        themeType="contained"
        style={{
          backgroundColor: props.backgroundColor,
        }}
      ></Button>
      <span
        className="arrowButton-text"
        style={{
          color: props.color,
        }}
      >
        {props.text}
      </span>
      <img className="arrowButton-union" src={props.union} alt="arrow button" />
    </div>
  )
}

export default ArrowButton
