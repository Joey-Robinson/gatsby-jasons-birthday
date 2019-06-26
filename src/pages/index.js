import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import BeardTemplate from "../templates/beard-template"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <h1>It's Jason's Birthday &#x1F382;</h1>
    </section>
  </Layout>
)

export default IndexPage
