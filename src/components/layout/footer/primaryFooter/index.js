import React from "react"
import prioLogo from "../../../../assets/images/layout/footer/prioLogo.svg"
import instagram from "../../../../assets/images/layout/footer/Instagram.svg"
import facebook from "../../../../assets/images/layout/footer/Facebook_white.svg"
import careQuality from "../../../../assets/images/layout/footer/CareQuality Commission 1.svg"
import arzten from "../../../../assets/images/layout/footer/Group 591.svg"

import "./style.scss"

function PrimaryFooter() {
  return (
    <div className="primaryFooter">
      <div className="container">
        <div className="primaryFooter-section">
          <h3 className="primaryFooter-section-title">Company</h3>
          <ul className="primaryFooter-section-links">
            <li className="primaryFooter-section-link">About Us</li>
            <li className="primaryFooter-section-link">Blog</li>
            <li className="primaryFooter-section-link">Careers</li>
          </ul>
        </div>
        <div className="primaryFooter-section social-media-section">
          <h3 className="primaryFooter-section-title">
            Find us on social media
          </h3>
          <div className="primaryFooter-section-logos">
            <img
              className="primaryFooter-section-logo"
              src={instagram}
              alt="instagram logo"
            />
            <img
              className="primaryFooter-section-logo"
              src={facebook}
              alt="facebook logo"
            />
          </div>
          <h1>
            {/* <img
              className="primaryFooter-section-prioLogo"
              src={prioLogo}
              alt="prio one"
            /> */}
            <object
              className="primaryFooter-section-prioLogo"
              data={prioLogo}
            ></object>
          </h1>
          <h3 className="primaryFooter-section-title">
            Medizinsche <br />
            Aufsichtsbehörde
          </h3>
          <div className="primaryFooter-section-logosWide">
            <img
              className="primaryFooter-section-logoWide"
              src={careQuality}
              alt="care quality logo"
            />
            <img
              className="primaryFooter-section-logoWide"
              src={arzten}
              alt="arzten logo"
            />
          </div>
        </div>
        <div className="primaryFooter-section">
          <h3 className="primaryFooter-section-title">Help</h3>
          <ul className="primaryFooter-section-links">
            <li className="primaryFooter-section-link">FAQ</li>
            <li className="primaryFooter-section-link">Contact Us</li>
            <li className="primaryFooter-section-link">Beschwerden</li>
            <li className="primaryFooter-section-link">Birth Control Brands</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PrimaryFooter
