import React from "react";
import { ListGroup, Row, Col, Card, Form } from 'react-bootstrap'

const ListaCarrito = (props) => {
    return <div className="mt-4 mb-4">
    {
        ((producto) => {
            return <Row className="mb-2">
                <Col>                       
                    <Card >
                        <Card.Body>{ producto.nombre }</Card.Body>
                    </Card>
                </Col>
            </Row>
        })
    }
</div>
}

export default ListaCarrito
/*
<ListGroup as="ul">
    <ListGroup.Item as="li" >CORE I5 </ListGroup.Item>
    <ListGroup.Item as="li" >RTX 3060</ListGroup.Item>
    <ListGroup.Item as="li" >16 GB RAM</ListGroup.Item>
    <ListGroup.Item as="li" >WINDOWS 11</ListGroup.Item>
</ListGroup>
*/