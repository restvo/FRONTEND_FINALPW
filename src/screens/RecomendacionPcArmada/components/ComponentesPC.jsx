import React from "react";
import { ListGroup, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import PcArmadaComp from "../PcArmadaComp";


const ComponentesPC = (props) => {
   return <div className="mt-4 mb-4">     
    {
        props.productosXpc.map((producto) => {
            
            return <Row className="mb-2">
                <Col>                       
                    <Card>
                        <Card.Body>             
                            { producto.nombre } - Precio: { producto.precio} <p></p><Button></Button></Card.Body>
                    </Card>
                </Col>
            </Row>
        })
    }
</div>}


export default ComponentesPC;