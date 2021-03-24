import "../styles/index.scss"
import React from "react"
import Layout from "../components/layout"
import Hero from "../components/home/hero"
import Ellipse from "../components/home/ellipse"
import Doctor from "../components/home/doctor"
import Team from "../components/home/team"
import { TrustPilot } from "../components/trustpilot"

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <Ellipse />
        <Team />
        <TrustPilot />
        <Doctor />
      </Layout>
    </div>
  )
}
