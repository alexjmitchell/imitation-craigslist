import React from "react"
import { useCategories } from "../../hooks"

const Community = props => {
  const { categories, subcategories } = useCategories()

  return (
    <div>
      <ul className="main-category-title">
        {categories.map((category, i) => (
          <li key={`category-${i}`}>
            {category.id === 1 ? `${category.name}` : ""}
          </li>
        ))}
      </ul>
      <hr />
      <ul className="subcategories">
        {subcategories.map((sub, i) => (
          <li key={`subcategory-${i}`}>
            {sub.parent_id === 1 ? `${sub.name}` : ""}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Community
