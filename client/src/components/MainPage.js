import React from "react"
import CategoryGrid from "./CategoryGrid"
import LeftSideNav from "./LeftSideNav"
import Header from './Header'

const MainPage = props => {
  return (
    <div>
      <LeftSideNav />
      <Header />
      <CategoryGrid />
    </div>
  )
}

export default MainPage
