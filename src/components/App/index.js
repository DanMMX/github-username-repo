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
  Row
} from 'reactstrap';
import {fetchUserRepos} from '../api'

import './App.css';

function App() {
  const [username, updateUsername] = useState('')
  const [currentUser, updateCurrentUser] = useState()
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
            <Input type="text" value={username} onChange={e => updateUsername(e.target.value)} name="username" id="username" placeholder="DanMMX" />
          </Col>
          <Col sm={3} className="text-right"><Button type="submit" color="primary">Search user</Button></Col>
        </FormGroup>
      </Form>
      <hr />
      {isLoading && <Row><Col><Spinner color="primary" className="mr-2" />Cargando usuario de Github</Col></Row>}
    </Container>
  );
}

export default App;
