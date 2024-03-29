import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TheBeards from "../components/soon"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <h1>
        It's Jason's Birthday <span>&#x1F382;</span>
      </h1>
      <TheBeards />
    </section>
  </Layout>
)

export default IndexPage
