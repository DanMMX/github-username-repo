import React, { useState } from 'react';
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

import './App.css';

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

  console.log(currentUser, repos, error)

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <FormGroup row className="pt-5">
          <Label sm={5} for="username" className="text-right">Ingrese el nombre de un usuario de Github</Label>
          <Col sm={4}>
            <Input type="text" value={username} onChange={e => updateUsername(e.target.value)} name="username" id="username" placeholder="Escribe un nombre de usuario" />
          </Col>
          <Col sm={3} className="text-right"><Button type="submit" color="info">Search user</Button></Col>
        </FormGroup>
      </Form>
      <hr />
      {isLoading && <Row><Col><Spinner color="primary" className="mr-2" />Cargando usuario de Github</Col></Row>}
      {!isLoading && error !== '' && <Row><Col><h5>{error}</h5></Col></Row>}
      {currentUser !== null && (
        <Row>
          <Col sm="4">
            <div className="thumbnail">
              <img src={currentUser.avatar_url} alt="User avatar" className="mb-2 img-thumbnail"/>
              <div className="caption">
                <h3 className="mb-1">{currentUser.name}</h3>
                <h5>{currentUser.login}</h5>
                <p>{currentUser.bio}</p>
              </div>
            </div>
          </Col>
          <Col sm="8">
            {repos.length === 0 && <h5>Este usuario no tiene ningún repo.</h5>}
            {repos.length !== 0 && repos.map(repo => <Row className="mb-2">
              <Col sm="9">
                <h5><a className="text-muted" href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a></h5>
                <p className="small">{repo.description}</p>
              </Col>
              <Col sm="3"><Badge color="info" pill>{repo.stargazers_count} Stars</Badge></Col>
              <Col sm="12"><hr/></Col>
            </Row>)}
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
