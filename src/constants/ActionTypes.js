const actionTypes = {}

const actionConstants = [
  // author action types
  SET_AUTHOR_FETCHING,
  SET_AUTHOR_LOADED,
  SET_AUTHOR,
  SET_AUTHOR_SELECTED,
  SET_AUTHOR_ERROR,

  // book action types
  SET_BOOKS_FETCHING,
  SET_BOOKS_LOADED,
  SET_BOOKS,
  SET_BOOKS_SELECTED,
  SET_BOOKS_ERROR,
]

actionConstants.map((action) => { actionTypes[action] = action })

export default Object.freeze(actionTypes)
