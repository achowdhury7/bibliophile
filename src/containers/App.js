import React, { Component } from 'react'
import { Header, PageContent } from '../components'
import { bookActions, authorActions } from '../actions'
import { fetchBookData } from '../data/stub'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class App extends Component {
  componentDidMount() {
    this.props.actions.fetchAuthors()
    this.props.actions.fetchBooks()
  }
  render() {
    return (
      <div>
        <Header />
        <PageContent />
      </div> 
    )
  }
}

const mapDispatchToProps = dispatch => 
  ({
    actions: bindActionCreators(Object.assign(
      {},
      authorActions,
      bookActions),
    dispatch
  )
  })

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
