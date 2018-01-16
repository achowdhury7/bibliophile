import React from 'react'
import { FormControl, FormGroup, Glyphicon } from 'react-bootstrap'

const Search = (props) => {
  return (
    <FormGroup className='search-form-group'>
      <Glyphicon glyph='search' className='glyphicon-search' aria-hidden='true' />
      <FormControl
        className='search'
        type='text'
        placeholder='Search Here...'
        //value={this.state.searchText}
        //inputRef={(ref) => { this.input = ref }}
        // onKeyPress={this.handleKeyPress}
        // onChange={this.handleChange}
      />
    </FormGroup>
  )
}

export default Search
