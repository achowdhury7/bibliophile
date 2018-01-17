import { combineReducers } from 'redux'
import { default as authors } from './authors'
import { default as books } from './books'

const appReducer = combineReducers({
  authors,
  books
})

const rootReducer = combineReducers({
  app: appReducer
})

export { rootReducer }
