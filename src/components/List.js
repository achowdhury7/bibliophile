import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Checkbox } from 'react-bootstrap'

class List extends Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(item, input) {
    const actions = this.props.actions

    if (this.props.tab === 'books') {
      if (input.checked) {
        actions.setBookSelected(item)
      } else {
        actions.setBookDeselected(item)
      }
    } else {
      if (input.checked) {
        actions.setAuthorSelected(item)
      } else {
        actions.setAuthorDeselected(item)
      }
    }
  }

  render() {
    const items = this.props.items
    const list = []

    items.map(item => {
      list.push((
        <div key={item.id || item.name}>
          <Checkbox
            className="list-checkbox"
            inputRef={ref => this.input = ref}
            onClick={() => this.handleSelect(item, this.input)}
          />
          <ListGroupItem header={item.name || item.title}>
            { item.title ? item.author.name : '' }
          </ListGroupItem>
        </div>
      ))
    })
    return (
      <ListGroup>
        {list}
      </ListGroup>

    )
  }
}

export default List
