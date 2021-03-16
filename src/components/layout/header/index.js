import React from "react"
import prioLogo from "../../../assets/images/layout/header/prio_logo.svg"
import prioLogoSmall from "../../../assets/images/layout/header/prio_logo_small.svg"
import hamburger from "../../../assets/images/home/hamburger.svg"
import cross from "../../../assets/images/home/cross.svg"
import Button from "./button"

import "./style.scss"

function Header() {
  const handleToggle = () => {
    document.querySelector(".header").classList.toggle("active")
    document.querySelector(".header-small").classList.toggle("active")
  }
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
          <div className="header-close" onClick={() => handleToggle()}>
            <img src={cross} alt="close" />
          </div>
        </ul>
        <Button />
      </div>

      <div className="header-small">
        <span className="header-small-link">
          <img
            className="header-small-menu active"
            src={hamburger}
            alt="hamburger"
            onClick={() => handleToggle()}
          />
        </span>
        <h1>
          <img
            className="header-small-logo"
            src={prioLogoSmall}
            alt="prio one"
          ></img>
        </h1>
        <span className="header-small-link">Start</span>
      </div>
    </div>
  )
}

export default Header
