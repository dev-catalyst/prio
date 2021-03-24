import React from "react"

import "./style.scss"

export default function index() {
  return (
    <div className="who-we-are">
      <div className="container">
        <div className="who-we-are-content">
          <h1>Who we are</h1>
          <p id="who-we-are-p1">
            Unser Team setzt sich aus Digital- und PharmaexpertInnen,
            GynäkologInnen, Data Scientists und Softwareentwicklern zusammen.
          </p>
          <p id="who-we-are-p2">
            Wir haben höchsten Anspruch an die Qualität unserer Arbeit. Um die
            Gesundheit der Frauen langfristig zu verbessern, kooperieren wir mit
            Wissenschaftlern und Universitäten. Mit Hilfe unseres medizinischen
            Beirats und klinischer Studien revolutionieren wir derzeitige
            Therapieansätze und damit die Gesundheitsversorgung jeder einzelnen
            Frau.
          </p>
        </div>
      </div>
    </div>
  )
}
