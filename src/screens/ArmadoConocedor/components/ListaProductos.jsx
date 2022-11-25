import React from "react";
import { ListGroup, Row, Col, Card, Form } from 'react-bootstrap'

const ListaProductos = (props) => {
    return <div className="mt-4 mb-4">
    {
        props.productos.map((producto) => {
            return <Row className="mb-2">
                <Col>                       
                    <Card onClick={ () => props.onProdFavSelected() }>
                        <Card.Body>{ producto.nombre } - Precio: { producto.precio}</Card.Body>
                    </Card>
                </Col>
            </Row>
        })
    }
</div>
}

export default ListaProductos

