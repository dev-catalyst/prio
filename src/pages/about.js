import "../styles/index.scss"
import React from "react"

import Layout from "../components/layout"

import TopThreeCombo from "../components/about/topThreeCombo"
// import Hero from "../components/about/hero/index"
// import Gallery from "../components/about/gallery/index"
// import WhoWeAre from "../components/about/whoWeAre/index"
import TheTeam from "../components/about/theTeam/index"
import OtherMembers from "../components/about/otherMembers/index"

export default function about() {
  return (
    <div style={{ backgroundColor: `#F8FAFB` }}>
      <Layout>
        <TopThreeCombo />
        {/* <Hero />
        <Gallery />
        <WhoWeAre /> */}
        <TheTeam />
        <OtherMembers />
      </Layout>
    </div>
  )
}
