import React, { Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import FormModal from './FormModal'

class ActionBar extends Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      showModal: false
    }
  }

  handleDelete(items) {
    if (this.props.tab === 'books') {
      items.map(item => {
        this.props.actions.deleteBook(item.id)
      })
    } else {
      items.map(item => {
        this.props.actions.deleteAuthor(item.id)
      })
    }
  }

  toggleModal() { this.setState({ showModal: !this.state.showModal })}

  handleAdd() {
    this.toggleModal()
    this.setState({
      type: 'add'
    })
  }
  
  render() {
    return (
      <div className="action-bar-container">
        <ButtonToolbar>
          <Button onClick={() => this.handleAdd()}>Add</Button>
          <Button onClick={() => this.handleDelete(this.props.selectedItems)}>Delete</Button>
        </ButtonToolbar>
        <FormModal 
          type={this.state.type} 
          tab={this.props.tab} 
          show={this.state.showModal} 
          onHide={this.toggleModal}
          actions={this.props.actions}
          selectedItem={this.props.selectedItems[0]} />
      </div>
    )
  }
}

export default ActionBar
