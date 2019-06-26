import React from "react"
import { Link } from "gatsby"

const BeardPreview = ({ title, slug }) => (
  <div className="arch">
    <p className="arch__heading">
      <Link to={`/${slug}`}>
        {title} <span>▶</span>
      </Link>
    </p>
  </div>
)

export default BeardPreview
