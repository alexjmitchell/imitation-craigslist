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
        <li>
          <h4>Event Calender</h4>
        </li>
        {/* <li>
          <img src="http://placehold.it/150/150" alt="calender goes here" />
        </li> */}
        <li>
          <table className="cal">
            <tbody>
              <tr className="days">
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
                <th>S</th>
              </tr>
              <tr>
                <td className="">11</td>
                <td className="">12</td>
                <td className="">13</td>
                <td className="">14</td>
                <td className="">15</td>
                <td className="">16</td>
                <td className="today ">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-17">
                    17
                  </a>
                </td>
              </tr>
              <tr>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-18">
                    18
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-19">
                    19
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-20">
                    20
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-21">
                    21
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-22">
                    22
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-23">
                    23
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-24">
                    24
                  </a>
                </td>
              </tr>
              <tr>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-25">
                    25
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-26">
                    26
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-27">
                    27
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-28">
                    28
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-29">
                    29
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-11-30">
                    30
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-12-01">
                    1
                  </a>
                </td>
              </tr>
              <tr>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-12-02">
                    2
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-12-03">
                    3
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-12-04">
                    4
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-12-05">
                    5
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-12-06">
                    6
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-12-07">
                    7
                  </a>
                </td>
                <td className="">
                  <a href="//bellingham.craigslist.org/d/events-classNamees/search/eee?sale_date=2019-12-08">
                    8
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
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
