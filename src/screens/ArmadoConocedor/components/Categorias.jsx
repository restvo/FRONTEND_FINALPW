import React from "react";
import { ButtonGroup,Button, Form} from 'react-bootstrap'

const Categorias = (props) => {
    return <Form>
        <Form.Group>
            <Form.Label>Categoria</Form.Label>
            <Form.Select
                onChange={ (evt) => { props.onCategoriaSelected(evt.target.value) }}>
                <option value={"-1"}>---- Seleccione categoria ----</option>
                {
                    props.categorias.map((categoria_prod) => {
                        return <option key={categoria_prod.id} value={categoria_prod.id}>
                            { categoria_prod.nombre }
                        </option>
                    })
                }
            </Form.Select>
        </Form.Group>
    </Form> 
}
export default Categorias





/*
<ButtonGroup vertical>
      <Button size="lg" variant="light">Graphics</Button>
      <Button size="lg" variant="light">Processor</Button>
      <Button size="lg" variant="light">Memory</Button>
      <Button size="lg" variant="light">Storage</Button>
      <Button size="lg" variant="light">Cooler</Button>
      <Button size="lg" variant="light">Windows</Button>
      <Button size="lg" variant="light">Power Supply</Button>
      </ButtonGroup>
*/