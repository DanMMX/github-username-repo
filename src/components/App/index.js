import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';

import './App.css';

function App() {
  return (
    <Container>
      <Form>
        <FormGroup row className="pt-5">
          <Label sm={8} for="username" className="text-right">Ingrese el nombre de un usuario de Github</Label>
          <Col sm={4}>
            <Input type="text" name="username" id="username" placeholder="DanMMX" />
          </Col>
        </FormGroup>
        <hr />
      </Form>
    </Container>
  );
}

export default App;
