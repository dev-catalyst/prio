import "../styles/index.scss"
import React from "react"
import Layout from "../components/layout"
import Hero from "../components/forDoctors/hero"
import Work from "../components/forDoctors/work"
import DocCarousel from "../components/forDoctors/docCarousel"
import Feedback from "../components/forDoctors/feedback"

function forDoctors() {
  return (
    <div>
      <Layout>
        <Hero />
        <Work />
        <DocCarousel />
        <Feedback />
      </Layout>
    </div>
  )
}

export default forDoctors
