import React from "react";
import { ListGroup, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const ListaProductos = (props) => {
    return <div className="mt-4 mb-4">
    {
        props.productos.map((producto) => {
            return <Row className="mb-2">
                <Col>                       
                    <Card>
                        <Card.Body>             
                            { producto.nombre } - Precio: { producto.precio} <p></p><Button>Añadir</Button></Card.Body>
                    </Card>
                </Col>
            </Row>
        })
    }
</div>
}
export default ListaProductos

