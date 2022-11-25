import React from "react";
import { Form, Button, Col, Row, ButtonGroup} from "react-bootstrap"

const FormularioInfo = () => {
    
    return  <Form class="p-3 mb-2 bg-light">

    <Row className="mb-3" >
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Last name</Form.Label>
      <Form.Control/>
    </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Email</Form.Label>
      <Form.Control/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Adress</Form.Label>
      <Form.Control/>
    </Form.Group>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Apartment, Suit, etc</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Country/Region</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>...</option>
          <option>Esto es opcional mejor meter manualmente</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Postal</Form.Label>
        <Form.Control />
      </Form.Group>
    </Row>
    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Phone</Form.Label>
      <Form.Control/>
    </Form.Group>
    <ButtonGroup>
    <Button variant="primary" type="submit">
      Uptade Info
    </Button>
    <Button variant="primary" type="submit">
      Cancel
    </Button>
    </ButtonGroup>
  </Form>
  

}

export default FormularioInfo 