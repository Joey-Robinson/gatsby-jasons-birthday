import React from "react"
import { Link } from "gatsby"

const BeardPreview = ({ title, slug }) => (
  <div className="b">
    <p className="b__heading">
      <Link to={`/${slug}`}>
        {title} <span>▶</span>
      </Link>
    </p>
  </div>
)

export default BeardPreview
