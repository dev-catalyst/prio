import "../styles/index.scss"
import React from "react"
import Layout from "../components/layout"
import Ellipse from "../components/faq/hero/ellipses"
import Dropdown from "../components/faq/dropdown"
import Try from "../components/faq/try"
export default function Faq() {
    return (<Layout >
        <Ellipse />
        <Dropdown />
        <Try />
    </Layout>)
}