import React from "react"
import "../styles/List.css"
import { Link } from "react-router-dom"
// ;[
//   {
//     id: 1,
//     name: "community",
//     slug: "community",
//     subcategories: [
//       { id: 14, name: "Local News", slug: "local-news" },
//       { id: 14, name: "Local News", slug: "local-news" },
//       { id: 14, name: "Local News", slug: "local-news" },
//       { id: 14, name: "Local News", slug: "local-news" },
//       { id: 14, name: "Local News", slug: "local-news" },
//       { id: 14, name: "Local News", slug: "local-news" },
//       { id: 14, name: "Local News", slug: "local-news" }
//     ]
//   }
// ]

const parameterize = string => {
  return string.replace(/\s+/g, "-").toLowerCase()
}

const List = props => {
  const { header, data, maxHeight } = props

  return (
    <div className="list-container">
      <h4 className="section-header">{header}</h4>
      <ul className="list-ul">
        {data.map((sub, i) => (
          <li key={i}>
            {/* <Link to={`${parameterize(x.name)}`}>{x.name}</Link> */}
            <Link to={`${sub.slug}`} key={`sub-${i}`}>
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
