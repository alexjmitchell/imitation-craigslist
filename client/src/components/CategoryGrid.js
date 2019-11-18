import React from "react"
import Community from "./MainCategories/Community"
import Housing from "./MainCategories/Housing"
import Jobs from "./MainCategories/Jobs"
import Services from "./MainCategories/Services"
import ForSale from "./MainCategories/ForSale"
import Personals from "./MainCategories/Personals"
import Gigs from "./MainCategories/Gigs"
import Resumes from "./MainCategories/Resumes"
import List from "./List"
import "../styles/CategoryGrid.css"
import { useCategories } from "../hooks"

const mockDataFromDatabase = [
  {
    id: 1,
    category: "Community",
    slug: "community",
    data: [
      { id: 14, name: "Carpenter", slug: "carpenter" },
      { id: 15, name: "Carpenter", slug: "carpenter" },
      { id: 16, name: "Carpenter", slug: "carpenter" },
      { id: 17, name: "Carpenter", slug: "carpenter" }
    ]
  }
]

const CategoryGrid = props => {
  const { categories, subcategories } = useCategories()
  const data = []
  let subs
  // Formating Data
  categories.forEach(cat => {
    const mainObj = {
      id: cat.id,
      category: cat.name,
      slug: cat.slug,
      children: null
    }
    const children = []
    subs = subcategories.filter(subcat => subcat.parent_id === cat.id)
    subs.forEach(sub => {
      const obj = {
        id: sub.id,
        name: sub.name,
        slug: sub.slug
      }
      children.push(obj)
    })
    mainObj.children = children
    data.push(mainObj)
  })

  return (
    <div className="grid">
      {/* <Community />
      <Housing />
      <Jobs />
      <Services />
      <ForSale />
      <Personals />
      <Gigs />
      <Resumes /> */}
      {data.map((category, i) => (
        <List
          data={category.children}
          header={category.category}
          maxHeight={500}
          key={`cat-${i}`}
        />
      ))}
    </div>
  )
}

export default CategoryGrid
