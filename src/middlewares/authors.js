import { isFSA } from 'flux-standard-action'
import types from '../constants/ActionTypes'
import { bookActions } from '../actions'
import { authorActions } from '../actions'

const deleteAuthor = ({ dispatch, getState, action }) => {
  const author = action.payload.data
  const books = getState().app.books.list
  
  books.map(book => {
    if (book.author.name === author.name) dispatch(bookActions.deleteBook(book.id))
  })
}

const interceptors = {}
interceptors[types.DELETE_AUTHOR] = deleteAuthor

const middleware = ({ dispatch, getState }) =>
  (next) => (action) => {
    // Check whether the action follows Flux Standard Action
    if (isFSA(action) && interceptors[action.type]) {
      interceptors[action.type]({ dispatch, getState, action })
    }

    return next(action)
  }

export default middleware