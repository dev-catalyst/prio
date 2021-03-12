import React from "react"
import { Button } from "@react-md/button"
import union from "../../../assets/images/utilities/Union.svg"

import "./style.scss"

function arrowButton(props) {
  return (
    <div className="arrowButton">
      <Button
        id="arrowButton"
        themeType="contained"
        style={{
          paddingRight: props.paddingRight,
          backgroundColor: props.backgroundColor,
        }}
      >
        {props.text}
      </Button>
      <img className="arrowButton-union" src={union} alt="arrow button" />
    </div>
  )
}

export default arrowButton
