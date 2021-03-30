import React from "react"
import { useLocation } from "@reach/router"

import prioLogo from "../../../assets/images/layout/header/prio_logo.svg"
import prioLogoDark from "../../../assets/images/layout/header/prio_logo_dark.svg"
import prioLogoSmall from "../../../assets/images/layout/header/prio_logo_small.svg"
import prioLogoSmallDark from "../../../assets/images/layout/header/prio_logo_small_dark.svg"
import hamburger from "../../../assets/images/layout/header/hamburger.svg"
import hamburgerDark from "../../../assets/images/layout/header/hamburger dark.svg"
import cross from "../../../assets/images/home/cross.svg"
import Button from "./button"

import "./style.scss"

const stripSlashes = path => {
  return path.split("/").join("")
}

function Header() {
  const location = useLocation()
  const currentPath = stripSlashes(location.pathname)
  if (currentPath === "") console.log("yay")

  const handleToggle = () => {
    document.querySelector(".header").classList.toggle("active")
    document.querySelector(".header-small").classList.toggle("active")
  }
  return (
    <div className="container">
      <div className="header">
        <h1>
          <img
            className="header-logo"
            src={currentPath === "" ? prioLogo : prioLogoDark}
            alt="prio one"
          ></img>
        </h1>
        <ul className={`header-links ${currentPath === "" ? "light" : "dark"}`}>
          <li>Über uns</li>
          <li>FAQs</li>
          <li>Blog</li>
          <li>Für Ärzte</li>
          <li>Login</li>
          <div className="header-close" onClick={() => handleToggle()}>
            <img src={cross} alt="close" />
          </div>
        </ul>
        <Button color={currentPath === "" ? "primary" : "secondary"} />
      </div>

      <div className="header-small">
        <span className="header-small-link">
          <img
            className="header-small-menu active"
            src={currentPath === "" ? hamburger : hamburgerDark}
            alt={currentPath === "" ? "hamburger" : "hamburgerDark"}
            onClick={() => handleToggle()}
          />
        </span>
        <h1>
          {/* <img
            className="header-small-logo"
            src={currentPath === "" ? prioLogo : prioLogoDark}
            alt={currentPath === "" ? "prio one" : "prio one"}
          /> */}
          <object
            className="header-small-logo"
            data={currentPath === "" ? prioLogo : prioLogoDark}
          ></object>
        </h1>
        <span
          className="header-small-link"
          style={currentPath === "" ? { color: "#fff" } : { color: "#1c2b49" }}
        >
          Start
        </span>
      </div>
    </div>
  )
}

export default Header
