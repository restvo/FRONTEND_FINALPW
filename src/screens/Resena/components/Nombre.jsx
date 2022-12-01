import React from "react";
import { Card, Form, FormGroup, Row, Col} from 'react-bootstrap'

const Nombre = (props) => { 

    return <div>
        
        {
            (() => {
                if (props.resenas.length == 0){
                    return <div> No hay resenas </div>
                }else {
                    return props.nombres.map((usuario) => {
                
                        return <Row>
                            
                            <Col>
                            <Card>
                            <Card.Body key={usuario.id} value={usuario.id}>
                                    {usuario.nombre}
                                </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    })
                }
            })
            
        }

    </div>
}

export default Nombre