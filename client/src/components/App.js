import React from "react"
import HomePage from "./HomePage"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"

const App = props => {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
  )
}

export default App
