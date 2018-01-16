import React, { Component } from 'react'
import Header from '../components/Header';
import PageContent from './PageContent';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PageContent />
      </div> 
    )
  }
}

export default App
