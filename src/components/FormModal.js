import React from 'react'
import { Modal } from 'react-bootstrap'
import AddBookForm from './AddBookForm'
import AddAuthorForm from './AddAuthorForm'

const FormModal = (props) => {
  let form
  let heading

  if (props.tab === 'books') {
      heading = 'Add Book'
      form = (
        <AddBookForm selectedItem={props.selectedItem} onHide={props.onHide} actions={props.actions} key="addBook" />
      )
  } else if (props.tab === 'authors') {
      heading = 'Add Author'
      form = (
        <AddAuthorForm selectedItem={props.selectedItem} onHide={props.onHide} actions={props.actions} key="addAuthor" />
      )
  }
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {form}
      </Modal.Body>  
    </Modal>
  )
}

export default FormModal