import React from "react";
import { MDBCard, MDBCardBody} from 'mdb-react-ui-kit';
import { Card } from 'react-bootstrap'; 

const InfoDefault = (props) => {
    return <div> 
      {
      props.informacion.map((usuario) => {
         return <Card vertical= 'true'>
          <Card.Body> Nombre: { usuario.nombre } - Apellido:  { usuario.apellido } - Correo: { usuario.correo } - Direccion: { usuario.direccion } - 
          Departamento: { usuario.departamento} - Ciudad: { usuario.ciudad } - Codigo Postal: { usuario.cod_post } - Telefono: { usuario.telefono }
            </Card.Body>
            </Card>
    
        })
    }
    </div> 
      }                                                 
export default InfoDefault;
