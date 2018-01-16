import { handleActions } from 'redux-actions'
import types from '../constants/ActionTypes'

const reducers = {}
const initState = {
  data: [],
  isFetching: false,
  isLoaded: false,
  error: false, 
  isSelected: false
}

reducers[types.SET_BOOK_FETCHING] = (state = initState) =>
  Object.assign({}, state, { isFetching: true })

reducers[types.SET_BOOK_LOADED] = (state = initState) =>
  Object.assign({}, state, { isFetching: false, isLoaded: true })

reducers[types.SET_BOOK_SELECTED] = (state = initState, action) =>
  Object.assign({}, state, { isSelected: action.payload.isSelected })

reducers[types.SET_BOOK] = (state = initState, action) =>
  Object.assign({}, state, { data: action.payload.data })

reducers[types.SET_BOOK_ERROR] = (state = initState) =>
  Object.assign({}, state, { isFetching: false, isLoaded: false, error: true })

export default handleActions(reducers, initState)