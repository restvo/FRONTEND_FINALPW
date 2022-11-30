import React from "react";
import { ButtonGroup,Button, Form} from 'react-bootstrap'
import PcArmadaComp from "../PcArmadaComp";

const ListaPcArmadas = (props) => {
    return <Form>
        <Form.Group>
            <Form.Label>Tipo de PC</Form.Label>
            <Form.Select
                onChange={ (evt) => { props.onTipoPcSelected(evt.target.value) }}>
                <option value={"-1"}>---- Seleccione categoria ----</option>
                {
                    props.tipo_pc.map((pc_armado_producto) => {
                        return <option key={pc_armado_producto.id} value={pc_armado_producto.id}>
                            { pc_armado_producto.nombre }
                        </option>
                    })
                }
            </Form.Select>
        </Form.Group>
    </Form> 
}
export default ListaPcArmadas