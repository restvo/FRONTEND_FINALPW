import React from "react";
import { ListGroup, Row, Col, Card, Form, Button } from 'react-bootstrap'


const ListaCarrito = (props) => {
    return <div className="mt-4 mb-4">
    {
        props.carrito.map((producto) => {
            return <Row className="mb-2">
                <Col>                       
                    <Card>
                        <Card.Body>             
                            Producto Seleccionado : { producto.nombre } - Precio: { producto.precio} <p></p><Button>Añadir</Button></Card.Body>
                    </Card>
                </Col>
            </Row>
        })
    }
</div>}

export default ListaCarrito
