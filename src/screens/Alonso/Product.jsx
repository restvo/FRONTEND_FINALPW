import React from 'react';
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const Product = (props) => (

  <Col xs={12} md={6} lg={4} key={props.id}>
    <Card style={{ width: '18rem' }}>
      <Card.Header>{props.nombre}</Card.Header>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.tipo}</Card.Title>
        <Card.Text>
          {props.descripcion}
        </Card.Text>
        <Button variant="primary" className="btn btn-">Comprar</Button>
        <Button className="btn btn-success">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  </Col>
)

export default Product;