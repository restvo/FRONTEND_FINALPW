import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import FormularioInfo from "./components/FormularioInfo";
import BotonesForm from "./components/BotonesForm";
import { Row, Col, Button, Form, ButtonGroup } from 'react-bootstrap'
import InfoDefault from "./components/InfoDefault";
import { useState, useEffect} from "react";
import { MDBCard, MDBCardBody} from 'mdb-react-ui-kit';

const FormularioInfoPage = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [cod_post, setPostal] = useState("");
    const [telefono, setTelefono] = useState("");
    const [ListadoInfo, setListadoInfo] = useState([]);


    
    const httpObtenerInfo = async () => {
        const ruta = "http://localhost:4447/usuariosform"
        const response = await fetch(ruta);
        const data = await response.json();
        console.log(data);
        setListadoInfo(data);
    }
    const httpActualizarUsuario = async (nombre, apellido, contrasena, correo, direccion, departamento, ciudad, cod_post, telefono) => {
        const data = {
            nombre : nombre,
            apellido : apellido,
            contrasena : contrasena,
            correo : correo,
            direccion : direccion,
            departamento : departamento,
            ciudad : ciudad,
            cod_post : cod_post,
            telefono : telefono
        }
    const resp = await fetch('http://localhost:4447/usuariosact',
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        }
    )
    }
    const guardarUsuario = (nombre, apellido, contrasena, correo, direccion, departamento, ciudad, cod_post, telefono) => {console.log(
        `nombre: ${nombre} apellido ${apellido} correo ${correo} contrasena ${contrasena} direccion ${direccion} departamento ${departamento} ciudad ${ciudad} postal ${cod_post} telefono ${telefono}`)
        httpActualizarUsuario(nombre, apellido, correo, contrasena, direccion, departamento, ciudad, cod_post, telefono)                 
    }
    useEffect(() => {
        httpObtenerInfo();
    }, []) 
    
    return <Layout 
    makeHeader={ () => <Header titulo="IMPORTAR"/> }
    makeBody={ 
        () => <Row >
            <Col md={3} className ="col-6">
                <BotonesForm className="container align-items-center justify-content-center"/>
            </Col>
            <Col md={6} className ="col-6">
            <InfoDefault informacion = { ListadoInfo }/>
            </Col>
            <Col md={9}>
            <Form className="p-3 mb-2 bg-light">

<Row className="mb-3" >
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>First name</Form.Label>
    <Form.Control type='text' value={ nombre } onChange={ (evt) => {setNombre(evt.target.value)}}/>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridEmail">
  <Form.Label>Last name</Form.Label>
  <Form.Control type='text' value={ apellido } onChange={ (evt) => {setApellido(evt.target.value)}}/>
</Form.Group>
</Row>
<Row className="mb-3" >
    <Form.Group as={Col} controlId="formGridAddress1">
  <Form.Label>Email</Form.Label>
  <Form.Control type='text' value={ correo } onChange={ (evt) => {setCorreo(evt.target.value)}}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
  <Form.Label>Nueva Contrasena</Form.Label>
  <Form.Control type='password' value={ contrasena } onChange={ (evt) => {setContrasena(evt.target.value)}}/>
    </Form.Group>
    </Row>


<Form.Group className="mb-3" controlId="formGridAddress2">
  <Form.Label>Adress</Form.Label>
  <Form.Control type='text' value={ direccion } onChange={ (evt) => {setDireccion(evt.target.value)}}/>
</Form.Group>
<Row className="mb-3">
  <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Apartment, Suit, etc</Form.Label>
    <Form.Control type='text' value={ departamento } onChange={ (evt) => {setDepartamento(evt.target.value)}}/>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridEmail">
  <Form.Label>City</Form.Label>
  <Form.Control type='text' value={ ciudad } onChange={ (evt) => {setCiudad(evt.target.value)}}/>
</Form.Group>
</Row>

<Row className="mb-3">
              
  <Form.Group as={Col} controlId="formGridZip">
    <Form.Label>Postal</Form.Label>
    <Form.Control type='text' value={ cod_post } onChange={ (evt) => {setPostal(evt.target.value)}}/>
  </Form.Group>
</Row>
<Form.Group className="mb-3" controlId="formGridAddress2">
  <Form.Label>Phone</Form.Label>
  <Form.Control type='text' value={ telefono } onChange={ (evt) => {setTelefono(evt.target.value)}}/>
</Form.Group>
<ButtonGroup>
<Button variant="primary" type="submit"  onClick={ () => {
                                guardarUsuario(nombre, apellido, contrasena, correo , direccion, departamento, ciudad, cod_post, telefono)
                            }}>
  Update Info
</Button>
<Button variant="primary" type="submit">
  Cancel
</Button>
</ButtonGroup>
</Form>
            </Col>
        </Row> 
    }
    makeFooter={ () => <Footer />}/>
}
export default FormularioInfoPage


