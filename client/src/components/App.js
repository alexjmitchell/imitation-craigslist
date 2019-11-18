import React from "react"
import MainPage from "./MainPage"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

const App = props => {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={MainPage} />
      </div>
    </Router>
  )
}

export default App
