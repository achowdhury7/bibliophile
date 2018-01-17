import { isFSA } from 'flux-standard-action'
import types from '../constants/ActionTypes'
import { bookActions } from '../actions'
import { authorActions } from '../actions'

const addBook = ({ dispatch, getState, action }) => {
  const book = action.payload.data
  const authors = getState().app.authors.list
  
  authors.map(author => author.name.toUpperCase())

  if (authors.indexOf(book.author.toUpperCase()) === -1) {
    dispatch(authorActions.addAuthor({ 
      name: book.author
    }))
  }
}

const interceptors = {}
interceptors[types.ADD_BOOK] = addBook

const middleware = ({ dispatch, getState }) =>
  (next) => (action) => {
    // Check whether the action follows Flux Standard Action
    if (isFSA(action) && interceptors[action.type]) {
      interceptors[action.type]({ dispatch, getState, action })
    }

    return next(action)
  }

export default middleware