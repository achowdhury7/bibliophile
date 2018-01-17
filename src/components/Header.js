import React, { Component } from 'react'
import { Col, FormControl, FormGroup, Glyphicon, Grid, Row } from 'react-bootstrap'
import Search from './Search';

const Header = (props) => {
  return (
    <Grid>
      <Row className="header-container">
        <Col md={4}>
          <div className="title">
            <h1>Bibiliophile</h1>
          </div>
        </Col>   
      </Row>
    </Grid>
  )
}

export default Header