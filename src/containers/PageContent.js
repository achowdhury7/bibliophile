import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'


class PageContent extends Component {
  render() {
    return (
      <div className="tab-group-container">
        <Tabs id="bibliophile" className="tabs">
          <Tab eventKey={'books'} title="Books">
            
          </Tab>
          <Tab eventKey={'authors'} title="Authors">
            
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default PageContent
