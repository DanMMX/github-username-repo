import React, { Fragment } from 'react'
import {
  Row,
  Col,
} from 'reactstrap'
import Repo from '../Repo'
import UserDetails from '../UserDetails'

const UserInfo = ({ currentUser, repos }) => (
  <Row>
    <Col lg="4" sm="12">
      <UserDetails avatar={currentUser.avatar_url} name={currentUser.name} login={currentUser.login} bio={currentUser.bio} />
      <hr className="d-lg-none"/>
    </Col>
    <Col lg="8" sm="12">
      {repos.length === 0 && <h5>This user doesn't have any repos.</h5>}
      {repos.length !== 0 && (
        <Fragment>
          <h2>Repos from user {currentUser.login}</h2>
          {repos.map(repo => (
            <Repo key={repo.id} url={repo.html_url} name={repo.name} description={repo.description} stars={repo.stargazers_count} />
          ))}
        </Fragment>
      )}
    </Col>
  </Row>
)

export default UserInfo