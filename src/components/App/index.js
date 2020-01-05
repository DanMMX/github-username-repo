import React, { useState, Fragment } from 'react';
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Spinner,
  Row,
  Badge
} from 'reactstrap';
import {fetchUserRepos} from '../api'

function App() {
  const [username, updateUsername] = useState('')
  const [currentUser, updateCurrentUser] = useState(null)
  const [repos, updateRepos] = useState([])
  const [error, updateError] = useState('')
  const [isLoading, updateIsLoading] = useState(false)

  const onSubmit = e => {
    e.preventDefault()
    updateIsLoading(true)
    fetchUserRepos(username, {updateError, updateIsLoading, updateCurrentUser, updateRepos})
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <FormGroup row className="pt-5">
          <Label lg={5} md={12} xs="12" for="username" className="text-right text-center mb-2 mb-lg-0"><b>Search a Github user through its username</b></Label>
          <Col lg={4} md={8} xs="12" className="text-center text-md-right">
            <Input type="text" className="mb-2 mb-lg-0" value={username} onChange={e => updateUsername(e.target.value)} name="username" id="username" placeholder="Enter a username" />
          </Col>
          <Col lg={3} md={4} xs="12" className="text-right text-center text-md-left mb-2 mb-lg-0"><Button type="submit" color="info">Search username</Button></Col>
        </FormGroup>
      </Form>
      <hr />
      {isLoading && <Row><Col><Spinner color="primary" className="mr-2" />Loading Github user</Col></Row>}
      {!isLoading && error !== '' && <Row><Col><h5>{error}</h5></Col></Row>}
      {currentUser !== null && (
        <Row>
          <Col lg="4" sm="12">
            <div className="thumbnail row">
              <Col xs={6} lg={12}>
                <img src={currentUser.avatar_url} alt="User avatar" className="mb-2 img-thumbnail"/>
              </Col>
              <Col xs={6} lg={12}>
                <div className="caption">
                  <h3 className="mb-1">{currentUser.name}</h3>
                  <h5>{currentUser.login}</h5>
                  <p>{currentUser.bio}</p>
                </div>
              </Col>
            </div>
            <hr className="d-lg-none"/>
          </Col>
          <Col lg="8" sm="12">
            {repos.length === 0 && <h5>This user doesn't have any repos.</h5>}
            {repos.length !== 0 && (
              <Fragment>
                <h2>Repos from user {currentUser.login}</h2>
                {repos.map(repo => (
                  <Row className="mb-2">
                    <Col sm="9">
                      <h5><a className="text-muted" href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h5>
                      <p className="small">{repo.description}</p>
                    </Col>
                    <Col sm="3"><Badge color="info" pill>{repo.stargazers_count} Stars</Badge></Col>
                    <Col sm="12"><hr/></Col>
                  </Row>
                ))}
              </Fragment>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
