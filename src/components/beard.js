import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Beard = ({ title, description, image, imageData }) => (
  <div className="beards">
    <Link className="beards--back" to="/">
      GO BACK
    </Link>
    <a
      className="beards--image image"
      target="_blank"
      rel="noopener noreferrer"
      href={image}
    >
      <Image fluid={imageData} alt={title} />
    </a>
    <h1>{description}</h1>
  </div>
)

export default Beard
