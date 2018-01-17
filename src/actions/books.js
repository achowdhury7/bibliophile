import types from '../constants/ActionTypes'
import { fetchBookData } from '../data/stub'

const addBook = data => 
  ({
    type: types.ADD_BOOK,
    payload: {
      data
    }
  })

const deleteBook = id => 
  ({
    type: types.DELETE_BOOK,
    payload: {
      id
    }
  })

const fetchBooks = () => 
  dispatch => {
    fetchBookData()
      .then(data => dispatch(setBooks(data)))
      .catch(() => dispatch(setBooksError()))
  }

const setBooks = data => 
  ({
    type: types.SET_BOOKS,
    payload: {
      data
    }
  })

const setBooksError = () => 
  ({
    type: types.SET_BOOKS_ERROR
  })


const setBooksFetching = () => 
  ({
    type: types.SET_BOOKS_FETCHING
  })

const setBookSelected = data => 
  ({
    type: types.SET_BOOK_SELECTED,
    payload: {
      data
    }
  })

const setBookDeselected = data => 
  ({
    type: types.SET_BOOK_DESELECTED,
    payload: {
      data
    }
  })
  
export default {
  addBook,
  deleteBook,
  fetchBooks,
  setBooks,
  setBooksFetching,
  setBookSelected,
  setBookDeselected,
  setBookSelected,
  setBooksError
}

