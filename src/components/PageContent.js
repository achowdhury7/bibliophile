import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { BooksTab, AuthorsTab } from '../containers'


class PageContent extends Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = {
      tab: 'books'
    }
  }

  handleSelect(key) {
    this.setState({
      tab: key
    })
  }

  render() {
    return (
      <div className="tab-group-container">
        <Tabs id="bibliophile" className="tabs" onSelect={this.handleSelect}>
          <Tab eventKey={'books'} title="Books">
            <BooksTab tab={this.state.tab}/>
          </Tab>
          <Tab eventKey={'authors'} title="Authors">
            <AuthorsTab tab={this.state.tab}/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default PageContent
