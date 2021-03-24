import React from "react"
import { Button } from "@react-md/button"

import "./style.scss"

const primaryColor = "#f46853"
const secondaryColor = "#1c2b49"

function button(props) {
  return (
    <Button
      id="headerButton"
      theme="primary"
      themeType="contained"
      style={
        props.color === "primary"
          ? { backgroundColor: primaryColor }
          : { backgroundColor: secondaryColor }
      }
    >
      Los geht's
    </Button>
  )
}

export default button
