import { handleActions } from 'redux-actions'
import types from '../constants/ActionTypes'

const reducers = {}
const initState = {
  list: [],
  isFetching: false,
  isLoaded: false,
  error: false, 
  selected: []
}

reducers[types.SET_AUTHORS_FETCHING] = (state = initState) =>
  Object.assign({}, state, { isFetching: true })

reducers[types.SET_AUTHORS_LOADED] = (state = initState) =>
  Object.assign({}, state, { isFetching: false, isLoaded: true })

reducers[types.SET_AUTHOR_SELECTED] = (state = initState, action) => {
  const selectedAuthors = state.selected

  selectedAuthors.push(action.payload.data)
  return Object.assign({}, state, { selected: selectedAuthors })
} 

reducers[types.SET_AUTHOR_DESELECTED] = (state = initState, action) => {
  const selectedAuthors = state.selected

  const newSelectedArray = selectedAuthors.filter(author => author.id !== action.payload.data.id)
  return Object.assign({}, state, { selected: newSelectedArray })
}

reducers[types.SET_AUTHORS] = (state = initState, action) =>
  Object.assign({}, state, { list: action.payload.data })

reducers[types.SET_AUTHORS_ERROR] = (state = initState) =>
  Object.assign({}, state, { isFetching: false, isLoaded: false, error: true })

reducers[types.ADD_AUTHOR] = (state = initState, action) => {
  const authors = state.list
  authors.push(action.payload.data)

  return Object.assign({}, state, { list: authors })
}

reducers[types.DELETE_AUTHOR] = (state = initState, action) => {
  const authors = state.list
  const newAuthorsArray = authors.filter(author => author.id !== action.payload.data.id)

  return Object.assign({}, state, { list: newAuthorsArray })
}

export default handleActions(reducers, initState)