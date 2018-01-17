import books from './sampleBooks'
import authors from './sampleAuthors'

const fetchBookData = () => Promise.resolve(books)

const fetchAuthorData = () => Promise.resolve(authors)

export {
  fetchAuthorData, 
  fetchBookData
}
