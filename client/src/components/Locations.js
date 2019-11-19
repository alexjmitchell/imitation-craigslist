import React from "react"
import { useLocation } from "../hooks"

const Locations = props => {
  const { locations } = useLocation()
  return (
    <div>
      <ul>
        {locations.map(location => (
          <li>{location.full_name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Locations
