import React from "react"
import prioLogo from "../../../assets/images/layout/header/prio_logo.svg"
import Button from "./button"

import "./style.scss"

function header() {
  return (
    <div className="container">
      <div className="header">
        <h1>
          <img className="header-logo" src={prioLogo} alt="prio one"></img>
        </h1>
        <ul className="header-links">
          <li className="header-link">Über uns</li>
          <li className="header-link">FAQs</li>
          <li className="header-link">Blog</li>
          <li className="header-link">Für Ärzte</li>
          <li className="header-link">Login</li>
        </ul>
        <Button />
      </div>
    </div>
  )
}

export default header
