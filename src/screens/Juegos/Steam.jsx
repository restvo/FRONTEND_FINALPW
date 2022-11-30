import React from "react";
import { Card, Container } from 'react-bootstrap';
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Steam = () => {
    const  [ListadoJuegosSteam, setListadoJuegosSteam ] = useState([]);

    const httpObtenerJuegosSteam = async (juegoId) => {
        const ruta = "http://localhost:4447/steam";
        const response = await fetch(ruta);
        const data = await response.json();
        console.log(data);
        setListadoJuegosSteam(data);
    }
    useEffect(() => {
        httpObtenerJuegosSteam();
    }, []) 




    return <Layout
    makeHeader={ () => <Header titulo="¡JUEGOS GRATIS CON TU COMPRA!"/> }
    makeBody={ 
        () => <div> 

    { ListadoJuegosSteam.map((steam) => {
    return <Container vertical= 'true' className="d-flex align-items-center justify-content-center text-center align-center">
        <Card  >
         <Card.Body>{ steam.nombre } - { steam.descripcion }
            
            </Card.Body>
        </Card>
        </Container>
    }) }
        </div>}
        makeFooter = { () => <Footer />}/>
    }
export default Steam;