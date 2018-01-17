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

reducers[types.SET_BOOKS_FETCHING] = (state = initState) =>
  Object.assign({}, state, { isFetching: true })

reducers[types.SET_BOOKS_LOADED] = (state = initState) =>
  Object.assign({}, state, { isFetching: false, isLoaded: true })

reducers[types.SET_BOOK_SELECTED] = (state = initState, action) => {
  const selectedBooks = state.selected

  selectedBooks.push(action.payload.data)
  return Object.assign({}, state, { selected: selectedBooks })
} 
 
reducers[types.SET_BOOK_DESELECTED] = (state = initState, action) => {
  const selectedBooks = state.selected

  const newSelectedArray = selectedBooks.filter(book => book.id !== action.payload.data.id)
  return Object.assign({}, state, { selected: newSelectedArray })
}

reducers[types.SET_BOOKS] = (state = initState, action) =>
  Object.assign({}, state, { list: action.payload.data, isFetching: false, isLoaded: true })

reducers[types.SET_BOOKS_ERROR] = (state = initState) =>
  Object.assign({}, state, { isFetching: false, isLoaded: false, error: true })

reducers[types.ADD_BOOK] = (state = initState, action) => {
  const books = state.list
  const newBook = {
    id: Math.floor(Math.random() * 100),
    title: action.payload.data.title,
    desc: action.payload.data.desc,
    author: {
      name: action.payload.data.author
    }
  }
  books.push(newBook)

  return Object.assign({}, state, { list: books })
}

reducers[types.DELETE_BOOK] = (state = initState, action) => {
  const books = state.list
  const newBooksArray = books.filter(book => book.id !== action.payload.id)

  return Object.assign({}, state, { list: newBooksArray })
}

export default handleActions(reducers, initState)
