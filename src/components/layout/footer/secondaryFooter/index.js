import React from "react"
import "./style.scss"

function SecondaryFooter() {
  return (
    <div className="secondaryFooter">
      <div className="container">
        <ul className="secondaryFooter-items">
          <div>
            <li className="secondaryFooter-item">Impressum</li>
            <li className="secondaryFooter-item">Datenschutz</li>
            <li className="secondaryFooter-item">AGB</li>
          </div>
          <div>
            <li className="secondaryFooter-item">
              &#169; 2021 prio.one. All rights reserved.
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default SecondaryFooter
