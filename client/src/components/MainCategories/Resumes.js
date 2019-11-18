import React from "react"
import { useCategories } from "../../hooks"

const Resumes = props => {
  const { categories, subcategories } = useCategories()

  return (
    <div className="category-container">
      <section className="category-cards">
        <ul className="main-category-title">
          {categories.map((category, i) => (
            <li key={`category-${i}`}>
              {category.id === 139 ? `${category.name}` : ""}
            </li>
          ))}
        </ul>
        <ul className="subcategories">
          {subcategories.map((sub, i) => (
            <li key={`subcategory-${i}`}>
              {sub.parent_id === 139 ? `${sub.name}` : ""}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Resumes
