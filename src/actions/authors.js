import types from '../constants/ActionTypes'
import { fetchAuthorData } from '../data/stub'

const addAuthor = data => 
  ({
    type: types.ADD_AUTHOR,
    payload: {
      data
    }
  })

const deleteAuthor = data => 
  ({
    type: types.DELETE_AUTHOR,
    payload: {
      data
    }
  })

const fetchAuthors = () => 
  dispatch => {
    fetchAuthorData()
      .then(data => dispatch(setAuthors(data)))
      .catch(() => dispatch(setAuthorsError()))
  }

const setAuthors = data => 
  ({
    type: types.SET_AUTHORS,
    payload: {
      data
    }
  })

const setAuthorsError = data => 
  ({
    type: types.SET_AUTHORS_ERROR
  })


const setAuthorsFetching = () => 
  ({
    type: types.SET_AUTHORS_FETCHING
  })

const setAuthorsLoaded = () => 
  ({
    type: types.SET_AUTHORS_LOADED
  })

const setAuthorSelected = data => 
  ({
    type: types.SET_AUTHOR_SELECTED,
    payload: {
      data
    }
  })

const setAuthorDeselected = data => 
  ({
    type: types.SET_AUTHOR_DESELECTED,
    payload: {
      data
    }
  })
  
export default {
  addAuthor,
  deleteAuthor,
  fetchAuthors,
  setAuthors,
  setAuthorsFetching,
  setAuthorSelected,
  setAuthorDeselected,
  setAuthorSelected,
  setAuthorsLoaded,
  setAuthorsError
}

