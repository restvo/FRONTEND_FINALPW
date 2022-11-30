import { Card, Form, Button, Container, Row, Col, Image } from 'react-bootstrap'
import { RUTA_BACKEND } from '../../conf'
import { useState } from 'react'
import { useNavigate } from 'react-router' 
import { useEffect } from 'react'


const LoginPage = () => {
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    
    
    const navigate = useNavigate()

    useEffect(() => {
     const token = localStorage.getItem("TOKEN")
     if(token !=  null ){
        navigate('/Conocedores')
     }
    }
    )

    const httpLogin = async (correo, password) => {
        const resp = await fetch(` ${ RUTA_BACKEND}/login`, {
        method : "POST",
        body : JSON.stringify({
            correo: correo,
            contrasena : contrasena
        }),
        headers : {"Content-type": "application/json"
    }
    })
    const data = await resp.json()
     if(data.error === ""){
        //login fue correcto
        localStorage.setItem( "TOKEN" , data.token)
        navigate('/Conocedores')

     }else{
        //login fue incorrecto
     }
}

    return <Container>
        <Row className='mt-4'>
            <Col></Col>
            <Col>
                <Card>
                    <Card.Body>
                        <h2>Login</h2>
                        <Image src={ `${ RUTA_BACKEND }/imagenes/logo.png` }/>
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    Correo
                                </Form.Label>
                                <Form.Control 
                                type='email'
                                value= { correo }
                                onChange = { (e) => setCorreo(e.target.value) }/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Password
                                </Form.Label>
                                <Form.Control type='password'
                                value= { contrasena }
                                onChange = { (e) => setContrasena(e.target.value) }/>
                            </Form.Group>
                            <Button className='mt-3' variant='warning'
                            onClick = { () =>{httpLogin(correo, contrasena)}}>Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>
    </Container>
}

export default LoginPage