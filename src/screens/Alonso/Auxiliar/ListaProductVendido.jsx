import React from "react";
import Row from 'react-bootstrap/Row';
import RankingProp from "../RankingProp";
import { Col, Card, Button} from 'react-bootstrap';

const ListaProductVendido = (props) => {
  //console.log(props.pcarmado)
  return <div className="mt-4 mb-4">
  {
      props.productos.map((producto) => {
          return <Row className="mb-2">
              <Col>                       
                  <Card>
                      <Card.Body>             
                          { producto.nombre } - Unidades Vendidas: { producto.u_vendidas} <p></p></Card.Body>
                  </Card>
              </Col>
          </Row>
      })
  }
</div>
};

export default ListaProductVendido