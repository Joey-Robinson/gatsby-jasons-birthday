import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Beard = ({ title, description, image, imageData }) => (
  <div>
    <p>{description}</p>
    <a
      className="archives--image image"
      target="_blank"
      rel="noopener noreferrer"
      href={image}
    >
      <Image fluid={imageData} alt={title} />
    </a>
  </div>
)

export default Beard
