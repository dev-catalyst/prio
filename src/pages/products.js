import "../styles/index.scss"
import React from "react"
import Layout from "../components/layout"
import Hero from "../components/products/hero"
import StressLess from "../components/products/stressLess"
import Priority from "../components/products/priority"
import Brands from "../components/products/brands"
import SafeSpace from "../components/products/safeSpace"
import OurApp from "../components/products/ourApp"
import WaitingForYou from "../components/products/waitingForYou"
import MedSet from "../components/products/medSet"
import { TrustPilot } from "../components/trustpilot"
import PlanInternational from "../components/products/planInternational"
import Reasons from "../components/products/reasons"
import YourChoice from "../components/products/yourChoice"

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <StressLess />
        <Priority />
        <Brands />
        <SafeSpace />
        <OurApp />
        <WaitingForYou />
        <MedSet />
        <TrustPilot />
        <PlanInternational />
        <Reasons />
        <YourChoice />
      </Layout>
    </div>
  )
}
