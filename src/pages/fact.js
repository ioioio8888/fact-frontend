import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Details from "../components/factDetails"

const factPage = () => (
  <Layout>
    <SEO title="Details" />
    <Details/>
  </Layout>
)

export default factPage
