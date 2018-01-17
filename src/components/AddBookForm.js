import React, { Component } from 'react'
import { Button, Col, ControlLabel, FormGroup, FormControl } from 'react-bootstrap'

class AddBookForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit() {
    this.props.onHide()
    return this.props.actions.addBook({
      title: this.title.value,
      author: this.author.value,
      desc: this.desc.value
    })
  }
  render() {
    return (
      <div>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Title
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Title" inputRef={ref => { this.title = ref; }}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Author
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Author" inputRef={ref => { this.author = ref; }} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Desc
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Desc" inputRef={ref => { this.desc = ref; }} />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
          </Col>
        </FormGroup>
      </div>
    )
  }
}

export default AddBookForm
