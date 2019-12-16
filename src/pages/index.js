import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import FactList from "../components/factlist"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Fact</h1>
    <p>Fact List:</p>
    <FactList/>
  </Layout>
)

export default IndexPage
