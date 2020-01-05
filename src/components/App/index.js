import React, { useState } from 'react';
import {
  Container,
  Col,
  Spinner,
  Row,
} from 'reactstrap';
import {fetchUserRepos} from '../api'
import Form from '../Form'
import UserInfo from '../UserInfo'

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
      <Form onSubmit={onSubmit} username={username} updateUsername={updateUsername} />
      <hr />
      {isLoading && <Row><Col><Spinner color="primary" className="mr-2" />Loading Github user</Col></Row>}
      {!isLoading && error !== '' && <Row><Col><h5>{error}</h5></Col></Row>}
      {!isLoading && currentUser !== null && (
        <UserInfo currentUser={currentUser} repos={repos} />
      )}
    </Container>
  );
}

export default App;
