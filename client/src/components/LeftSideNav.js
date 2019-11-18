import React from "react"
import "../styles/LeftSideNav.css"

const LeftSideNav = props => {
  return (
    <div className="left-nav">
      <ul>
        <li>
          <h1>Craigslist</h1>
        </li>
        <li>
          <a href="#">Create a posting</a>
        </li>
        <li>My Account</li>
        <li>
          <form>
            <input
              type="text"
              placeholder="search craigslist"
              id="main-search"
              name="main-search"
            />
          </form>
        </li>
        <li><h4>Event Calender</h4></li>
        <li>
          <img src="http://placehold.it/150/150" alt="calender goes here" />
        </li>
        <br />
        <li>help,faq,abuse,legal</li>
        <li>avoid scams and fraud</li>
        <li>personal safety tips</li>
        <li>terms of use</li>
        <li>privacy policy</li>
        <li>system status</li>
        <br />
        <li>about craigslist</li>
        <li>craigslist is hiring</li>
        <li>craigslist open source</li>
        <li>craigslist blog</li>
        <li>best-of-craigslist</li>
        <li>craigslist TV</li>
        <li>"craiglist joe"</li>
        <li>craig connects</li>
      </ul>
    </div>
  )
}

export default LeftSideNav
