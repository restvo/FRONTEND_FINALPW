import React from "react";
import { Row, Col, Card } from 'react-bootstrap'

const ListaTipoPc = (props) => {
  //console.log(props.pcarmado)
  return <div className="mt-4 mb-4">
    {
      props.tipo.map((tipo)=>{
        return <Row className="mb-2">
          <Col>
            <Card onClick={() => props.onTipoSelected(tipo.id)}>
              <Card.Body>{tipo.nombre}</Card.Body>
            </Card>
          </Col>
        </Row>
      })
    }
  </div>
}

export default ListaTipoPc