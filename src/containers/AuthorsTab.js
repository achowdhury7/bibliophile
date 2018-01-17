import React, { Component } from 'react'
import { ActionBar, List } from '../components'
import { authorActions } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class AuthorsTab extends Component {
  render() {
    return (
      <div>
        <ActionBar tab="authors" selectedItems={this.props.authors.selected} actions={this.props.actions} />
        <List tab="authors" items={this.props.authors.list} actions={this.props.actions} />
      </div>
    )
  } 
}

const mapDispatchToProps = dispatch => 
  ({
    actions: bindActionCreators(Object.assign(
      {},
      authorActions),
    dispatch
  )
  })

const mapStateToProps = state => ({
  authors: state.app.authors
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsTab)
