import React from 'react'
import { Col } from 'reactstrap'

const UserDetails = ({ avatar, name, login, bio }) => (
  <div className="thumbnail row">
    <Col xs={6} lg={12}>
      <img src={avatar} alt="User avatar" className="mb-2 img-thumbnail"/>
    </Col>
    <Col xs={6} lg={12}>
      <div className="caption">
        <h3 className="mb-1">{name}</h3>
        <h5>{login}</h5>
        <p>{bio}</p>
      </div>
    </Col>
  </div>
)

export default UserDetails