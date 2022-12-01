import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import epic from "./images/epic.jpg";
import steam from "./images/steam.png";
import { Card, Container } from 'react-bootstrap';
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate } from "react-router";


const PrincipalJuegos = () => {

    const navigate = useNavigate()
    
    function navegar (){
        navigate('/Epic')
    }
    function navegar2 () {
        navigate('/Steam')
    }

return <Layout
    makeHeader={ () => <Header titulo="¡JUEGOS GRATIS CON TU COMPRA!"/> }
    makeBody={ 
    () => <div>
        
    <Card vertical= 'true' className="d-flex align-items-center justify-content-center text-center">
            ¡Elige tu plataforma preferida!
        <Card.Body>
        <img src= { epic } className="rounded-3"
        style={{ width: "380px" }}
        alt="Epic"
        onClick = { navegar }/>
            </Card.Body>
        </Card>
        <Card vertical= 'true' className="d-flex align-items-center justify-content-center text-center">
        <img src= { steam } className="rounded-3"
        style={{ width: "380px" }}
        alt="Steam" onClick = { navegar2 }/>
        </Card >
        </div>}
        makeFooter = { () => <Footer />}/>
        
        }

export default PrincipalJuegos;