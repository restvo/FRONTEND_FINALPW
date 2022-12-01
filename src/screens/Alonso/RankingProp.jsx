import React from 'react';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const RankingProp = (props) => (

  <Col xs={12} md={6} lg={4} key={props.id}>
    <Card style={{ width: '18rem' }}>
      <Card.Header>{props.nombre}</Card.Header>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>
          {props.uvendidas}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
)

export default RankingProp;