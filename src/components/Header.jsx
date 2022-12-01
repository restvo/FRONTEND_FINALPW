import React from "react";
import { Nav, Form, Button, Image, Modal, Navbar, Container} from 'react-bootstrap';
import { useNavigate } from "react-router";

const Header = (props) => {
    const navigate = useNavigate()

    function navegar(){
      navigate("/FormularioInfo")}
      function navegar2(){
        navigate("/rankingpc")}
    return <>
    <div >
    <Navbar bg="light" expand="lg" style={{height: '50px'}}>
    <Container fluid >
        <Navbar.Brand href="#" ><Image
        src="https://thumbs.dreamstime.com/b/gamepad-icon-controller-isolated-white-background-149257730.jpg"
        rounded style={{ maxHeight: '40px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '50px' }}
            navbarScroll
        >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2" onClick = { navegar }>Cuenta</Nav.Link>
            <Nav.Link href="#">
              Support
            </Nav.Link>
            <Nav.Link href="#">
              Review
            </Nav.Link>
            <Nav.Link href="#" onClick = { navegar2 }>
              Ranking 
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success">Search</Button>
          </Form>
          <Image
            src="https://thumbs.dreamstime.com/b/person-icon-flat-style-man-symbol-person-icon-flat-style-man-symbol-isolated-white-background-simple-people-abstract-icon-118611127.jpg"
            rounded style={{ maxHeight: '40px' }} />
          <Image
            src="https://thumbs.dreamstime.com/b/shopping-cart-icon-black-white-shopping-cart-icon-black-white-buttons-white-background-vector-illustration-117843673.jpg"
            rounded style={{ maxHeight: '40px'}} />
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </div>
    <div>
    <Modal.Header >
        <Modal.Title > <h1>{props.titulo}</h1></Modal.Title>
    </Modal.Header>
    </div>
    </>

}

export default Header