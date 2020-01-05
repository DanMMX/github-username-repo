import React from 'react'
import { Row, Col, Badge } from 'reactstrap'

const Repo = ({ url, name, description, stars }) => (
  <Row className="mb-2">
    <Col sm="9">
      <h5><a className="text-muted" href={url} target="_blank" rel="noopener noreferrer">{name}</a></h5>
      <p className="small">{description}</p>
    </Col>
    <Col sm="3"><Badge color="info" pill>{stars} Stars</Badge></Col>
    <Col sm="12"><hr/></Col>
  </Row>
)

export default Repo