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
          paddingRight: props.paddingRight,
          color: props.color,
          backgroundColor: props.backgroundColor,
        }}
      >
        {props.text}
      </Button>
      <img className="arrowButton-union" src={props.union} alt="arrow button" />
    </div>
  )
}

export default ArrowButton
