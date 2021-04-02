import "../styles/index.scss"
import React from "react"
import Layout from "../components/layout"
import FirstPost from "../components/blog/first-post"
import ellipses from "../assets/images/blog/Group 1320.svg"
import Post1 from "../assets/images/blog/image 169.png"
import BirthControl from "../components/blog/birth-control"
import Health from "../components/blog/health"
import SelfCare from "../components/blog/self-care"

import Try from "../components/faq/try"
export default function Blog() {
    return (<Layout >
<div>
    <div className="featured-stories-sec">
    <img src={ellipses} className="banner-right-img" alt="ellipses" /> 
    <div className="container">
        <h1>Featured stories</h1>
        <div className="first-featured-post-sec">
          <div className="row">
          <div className="col-sm-7">
              <div className="img-hover-wrapper">
              <img src={Post1} alt=""/> 
              </div>
          </div>
          <div className="col-sm-5">
              <span className="category-name-wrapper">HEALTH</span>
              <h2>Mein Spiegelbild – Freund oder Feind?</h2>
              <p>Gibt es überhaupt Menschen, die mich attraktiv finden? Bin ich gut genug? Wie du mit solchen Gedanken umgehst, erfährst du hier.</p>
          </div>
          </div>
        </div>
        </div>
    </div>
    <div className="three-featured-post-col">
        <div className="container">
        <div className="row three-featured-post-row">
        <div className="col-sm-4">
        <div className="img-hover-wrapper">
              <img src={Post1} alt=""/> 
              </div>
              <div className="three-featured-post-content">
              <span className="category-name-wrapper birth-control-btn">BIRTH CONTROL</span>
              <h3>Keep<br/> (birth) control!</h3>
              <p>Die Antibabypille – das wohl beliebteste und weit verbreitetste Verhütungsmittel und wortwörtlich in (fast) aller Munde.</p>
              </div>
        </div>
        <div className="col-sm-4">
        <div className="img-hover-wrapper">
              <img src={Post1} alt=""/> 
              </div>
              <div className="three-featured-post-content">
              <span className="category-name-wrapper">HEALTH</span>
              <h3>All About: Der weibliche Zyklus</h3>
              <p>Wie ticken wir Frauen und unsere Körper eigentlich? Um uns, unsere Launen und unsere Sexualität besser zu begreifen, lohnt sich ein genauer Lupenblick.</p>
              </div>
        </div>
        <div className="col-sm-4">
        <div className="img-hover-wrapper">
              <img src={Post1} alt=""/> 
              </div>
              <div className="three-featured-post-content">
              <span className="category-name-wrapper self-care-btn">SELF-CARE</span>
              <h3>How To: Der einfache Weg zum Pillenrezept</h3>
              <p>Von wegen verrückter Tempel mit verrückterem Labyrinth – bei uns kommst du ganz einfach zum Ziel: Dein Rezept für die Antibabypille bekommst.</p>
              </div>
        </div>
        </div>
        </div>
    </div>
</div>
<div>
</div>
<BirthControl />
<Health />
<SelfCare />
        <Try />
    </Layout>)
}