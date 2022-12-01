import React from "react";
import { Form } from 'react-bootstrap';

const ListaDescPc = (props) => {
  //console.log(props.pcarmado)
  return <Form>
    <Form.Group>
      <Form.Label>Pc Descripcion</Form.Label>
      <Form.Select
        onChange={(evt) => { props.onDescSelected(evt.target.value) }}>
        <option value={"-1"}>--- Seleccione Descripcion de Pc ---</option>
        {
          props.descripcion.map((descripcion) => {
            return <option key={descripcion.id} value={descripcion.id}>
              {descripcion.nombre}
              </option>
          })
        }
      </Form.Select>
    </Form.Group>
  </Form>
}

export default ListaDescPc