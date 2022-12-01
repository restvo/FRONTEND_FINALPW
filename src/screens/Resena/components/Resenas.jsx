import React from "react";
import { Card, Form, FormGroup, Row, Col} from 'react-bootstrap'

const Resenas = (props) => { 

    return <div>
        
        {
            props.resenas.map((resena) => {
                return <Row>

                    <Col>
                    <Card>
                    <Card.Body>
                            {resena.comentario}
                            <p> </p>
                            {resena.puntaje}
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            })
        }

    </div>
}

export default Resenas