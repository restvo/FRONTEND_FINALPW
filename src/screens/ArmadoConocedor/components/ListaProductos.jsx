import React from "react";
import { ListGroup, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function PlayerInfo(props) {
    const [show, setShow] = useState(true);
    
    function toggleButton() {
        
    }
    
    return (<Card >
      <Button>
        <button onClick={<Card.Body></Card.Body>}> Añadir </button>
        {show ? props.children : null}
        </Button>
            </Card>
    );  
    }

const ListaProductos = (props) => {
    return <div className="mt-4 mb-4">
    {
        props.productos.map((producto) => {
            return <Row className="mb-2">
                <Col>                       
                    <Card onClick={ () => props.onProdFavSelected() }>
                        <Card.Body>             
                            { producto.nombre } - Precio: { producto.precio} <p></p><Button></Button></Card.Body>
                    </Card>
                </Col>
            </Row>
        })
    }
</div>
}

export default ListaProductos

