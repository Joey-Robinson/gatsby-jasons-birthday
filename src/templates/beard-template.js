import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Beard from "../components/beard.js"

export const query = graphql`
  query($slug: String!) {
    beardsJson(slug: { eq: $slug }) {
      description
      title
      slug
      image {
        publicURL
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const BeardTemplate = ({ data }) => {
  const beard = data.beardsJson
  const title = beard.title
  const description = beard.description
  const imageData = beard.image.childImageSharp.fluid
  const image = beard.image.publicURL

  return (
    <Layout>
      <Beard
        image={image}
        title={title}
        description={description}
        imageData={imageData}
      />
    </Layout>
  )
}

export default BeardTemplate
