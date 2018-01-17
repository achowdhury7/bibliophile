import React, { Component } from 'react'
import { ActionBar, List } from '../components'
import { bookActions } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class BooksTab extends Component {
  render() {
    return (
      <div>
        <ActionBar tab={this.props.tab} selectedItems={this.props.books.selected} actions={this.props.actions} />
        <List tab={this.props.tab} items={this.props.books.list} actions={this.props.actions} />
      </div>
    )
  } 
}

const mapDispatchToProps = dispatch => 
  ({
    actions: bindActionCreators(Object.assign(
      {},
      bookActions),
    dispatch
  )
  })

const mapStateToProps = state => ({
  books: state.app.books
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksTab)
