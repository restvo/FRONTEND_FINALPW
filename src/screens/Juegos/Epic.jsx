import React from "react";
import { Card, Container } from 'react-bootstrap';
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";



const Epic = () => {
    const  [ListadoJuegosEpic, setListadoJuegosEpic ] = useState([]);

    const httpObtenerJuegosEpic = async (juegoId) => {
        const ruta = "http://localhost:4447/epic";
        const response = await fetch(ruta);
        const data = await response.json();
        console.log(data);
        setListadoJuegosEpic(data);
    }
    useEffect(() => {
        httpObtenerJuegosEpic();
    }, []) 

 return <Layout
    makeHeader={ () => <Header titulo="¡JUEGOS GRATIS CON TU COMPRA!"/> }
    makeBody={ 
        () => <div> 

    { ListadoJuegosEpic.map((epic) => {
    return <Container vertical= 'true' className="d-flex align-items-center justify-content-center text-center align-center">
        <Card  >
         <Card.Body>{ epic.nombre } - { epic.descripcion }
            </Card.Body>
        </Card>
        </Container>
    }) }
        </div>}
        makeFooter = { () => <Footer />}/>
    }


export default Epic;