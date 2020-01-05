import React from 'react'
import {
  Button,
  FormGroup,
  Label,
  Input,
  Col,
  Form
} from 'reactstrap'

const UserForm = ({ onSubmit, username, updateUsername }) => (
  <Form onSubmit={onSubmit}>
    <FormGroup row className="pt-5">
      <Label lg={5} md={12} xs="12" for="username" className="text-right text-center mb-2 mb-lg-0"><b>Search a Github user through its username</b></Label>
      <Col lg={4} md={8} xs="12" className="text-center text-md-right">
        <Input type="text" className="mb-2 mb-lg-0" value={username} onChange={e => updateUsername(e.target.value)} name="username" id="username" placeholder="Enter a username" />
      </Col>
      <Col lg={3} md={4} xs="12" className="text-right text-center text-md-left mb-2 mb-lg-0"><Button type="submit" color="info">Search username</Button></Col>
    </FormGroup>
  </Form>
)

export default UserForm