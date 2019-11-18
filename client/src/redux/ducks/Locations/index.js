import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const GET_LOCATIONS = "locations/GET_LOCATIONS"

const initialState = {
  locations: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return { ...state, locations: action.payload }
    default:
      return state
  }
}

const getLocations = () => {
  return dispatch => {
    axios.get("/locations").then(response => {
      dispatch({
        type: GET_LOCATIONS,
        payload: response.data
      })
    })
  }
}

export const useLocation = () => {
  const dispatch = useDispatch()
  const locations = useSelector(appState => appState.locationState.locations)

  useEffect(() => {
    dispatch(getLocations())
  })

  return { locations }
}
