import React, { Component } from 'react'
import { Button, Col, ControlLabel, FormGroup, FormControl } from 'react-bootstrap'

class AddAuthorForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit() {
    this.props.onHide()
    return this.props.actions.addAuthor({
      name: this.name.value
    })
  }
  render() {
    return (
      <div>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="text" placeholder="Name" inputRef={ref => { this.name = ref; }}/>
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

export default AddAuthorForm
