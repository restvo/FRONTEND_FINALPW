import React from "react";
import { Card, Container } from 'react-bootstrap';
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import gow from "./images/gow.jpg";
import elden from "./images/elden.jpg";



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
        () => <Container> 
        <Card>
            <Card.Body >
            <img src= { elden } className="rounded-3"
            style={{ width: "190px" }}
            alt="Epic"
            />
            </Card.Body>
            { ListadoJuegosEpic.map((epic) => {
return <Card>
     <Card.Body> 
        { epic.nombre } - { epic.descripcion }

        </Card.Body>
    </Card>
}) }
        <Card>
            <Card.Body >
            <img src= { gow } className="rounded-3"
            style={{ width: "180px" }}
            alt="Epic"
            />
            </Card.Body>
            
        </Card>
        
        
        
        </Card>
        

    </Container>}
        makeFooter = { () => <Footer />}/>
    }


export default Epic;