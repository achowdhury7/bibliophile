const actionTypes = {}

const actionConstants = [
  // author action types
  'FETCH_AUTHORS',
  'SET_AUTHORS_FETCHING',
  'SET_AUTHORS',
  'SET_AUTHOR_SELECTED',
  'SET_AUTHOR_DESELECTED',
  'SET_AUTHORS_SELECTED',
  'SET_AUTHORS_ERROR',

  'ADD_AUTHOR', 
  'DELETE_AUTHOR',

  // book action types
  'FETCH_BOOKS',
  'SET_BOOKS_FETCHING',
  'SET_BOOKS',
  'SET_BOOK_SELECTED',
  'SET_BOOK_DESELECTED',
  'SET_BOOKS_SELECTED',
  'SET_BOOKS_ERROR',

  'ADD_BOOK',
  'DELETE_BOOK'
]

actionConstants.map((action) => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
