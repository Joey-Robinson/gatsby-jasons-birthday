import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BeardPreview from "../components/beard-preview"

const TheBeards = () => {
  const data = useStaticQuery(graphql`
    {
      allBeardsJson {
        edges {
          node {
            title
            slug
            description
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
      }
    }
  `)
  const beard = data.allBeardsJson.edges

  return (
    <section className="beard">
      {beard.map(({ node: beard }) => {
        const title = beard.title
        const description = beard.description
        const slug = beard.slug
        const imageData = beard.image.childImageSharp.fluid
        const image = beard.image.publicURL

        return (
          <BeardPreview
            image={image}
            title={title}
            description={description}
            slug={slug}
            imageData={imageData}
          />
        )
      })}
    </section>
  )
}

export default TheBeards
