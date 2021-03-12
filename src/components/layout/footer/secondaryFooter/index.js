import React from "react"
import "./style.scss"

function secondaryFooter() {
  return (
    <div className="secondaryFooter">
      <div className="container">
        <ul className="secondaryFooter-items">
          <li className="secondaryFooter-item">Impressum</li>
          <li className="secondaryFooter-item">Datenschutz</li>
          <li className="secondaryFooter-item">AGB</li>
          <li className="secondaryFooter-item">
            &#169; 2021 prio.one. All rights reserved.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default secondaryFooter
