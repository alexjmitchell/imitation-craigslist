import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const GET_MAIN_CATEGORIES = "categories/GET_MAIN_CATEGORIES"
const GET_SUB_CATEGORIES = "categories/GET_SUB_CATEGORIES"

const initialState = {
  categories: [],
  subcategories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MAIN_CATEGORIES:
      return { ...state, categories: action.payload }
    case GET_SUB_CATEGORIES:
      return { ...state, subcategories: action.payload }
    default:
      return state
  }
}

const getMainCategories = () => {
  return dispatch => {
    axios.get("/categories").then(response => {
      dispatch({
        type: GET_MAIN_CATEGORIES,
        payload: response.data
      })
    })
  }
}

const getSubCategories = () => {
  return dispatch => {
    axios.get("/subcategories").then(response => {
      dispatch({
        type: GET_SUB_CATEGORIES,
        payload: response.data
      })
    })
  }
}

export const useCategories = () => {
  const dispatch = useDispatch()
  const categories = useSelector(appState => appState.categoryState.categories)
  const subcategories = useSelector(
    appState => appState.categoryState.subcategories
  )

  useEffect(() => {
    dispatch(getMainCategories())
    dispatch(getSubCategories())
  }, [dispatch])

  return { categories, subcategories }
}
