import React from "react";
import { Card, Container } from 'react-bootstrap';
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import stray from "./images/stray.jpg";
import mw2 from "./images/mw2.jpg";


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
        () => <Container> 
            <Card>
                <Card.Body >
                <img src= { mw2 } className="rounded-3"
                style={{ width: "120px" }}
                alt="Epic"
                />
                </Card.Body>
                { ListadoJuegosSteam.map((steam) => {
    return <Card>
         <Card.Body> 
            { steam.nombre } - { steam.descripcion }

            </Card.Body>
        </Card>
    }) }
            <Card>
                <Card.Body >
                <img src= { stray } className="rounded-3"
                style={{ width: "120px" }}
                alt="Epic"
                />
                </Card.Body>
                
            </Card>
            
            
            
            </Card>
            

        </Container>}
        makeFooter = { () => <Footer />}/>
    }
export default Steam;