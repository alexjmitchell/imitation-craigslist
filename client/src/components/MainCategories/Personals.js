import React from "react"
import { useCategories } from "../../hooks"

const Personals = props => {
  const { categories, subcategories } = useCategories()

  return (
    <div className="category-container">
      <section className="category-cards">
        <ul className="main-category-title">
          {categories.map((category, i) => (
            <li key={`category-${i}`}>
              {category.id === 122 ? `${category.name}` : ""}
            </li>
          ))}
        </ul>
        <ul className="subcategories" id="personals">
          {subcategories.map((sub, i) => (
            <li key={`subcategory-${i}`}>
              {sub.parent_id === 122 ? `${sub.name}` : ""}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Personals
