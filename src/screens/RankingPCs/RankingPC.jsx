import React from "react";
import {  } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { Container, Image } from "react-bootstrap";
import { RUTA_BACKEND } from "../../conf";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import hdd from "./images/hdd.jpg";
import intel from "./images/intel.jpg";
import pc1 from "./images/pc1.jpg";
import pc2 from "./images/pc2.jpg";
import procesador from "./images/procesador.jpg";
import radeon from "./images/radeon.jpg";
import ram from "./images/ram.jpg";
import gtx1660 from "./images/gtx1660.jpg";
import { useNavigate } from "react-router-dom";

const RankingPC = () => {

    return <Layout

    makeHeader={ () => <Header titulo="Ranking pc" /> }
    makeBody={ 
        () =>   <Container>
            <h1> Ranking pc´s mas vendidas</h1>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
        <Accordion.Item eventKey="0">
            <Accordion.Header><Image src={ `${ RUTA_BACKEND }/imagenes/pc1.jpg` } style={{height:"120px"}}></Image>Ranking #1</Accordion.Header>
            <Accordion.Body>
                <div>
                    <Image
                    src={ `${ RUTA_BACKEND }/imagenes/intel.jpg` } style={{height:"50px"}}>
                    </Image> Procesador intel 7ma generacion
            </div>
            <br></br>
            <div>
                <Image
                src={ `${ RUTA_BACKEND }/imagenes/gtx1660.jpg` } style={{height:"80px"}}>
                </Image> Tarjeta de video GTX 1660 
            </div>
            <br></br>
            <div>
                <Image
                src={ `${ RUTA_BACKEND }/imagenes/ram.jpg` } style={{height:"77px"}}>
                </Image> Ram de 16 GB
            </div>
            <br></br>
            <div>
                <Image
                src={ `${ RUTA_BACKEND }/imagenes/hdd.jpg` } style={{height:"80px"}}>
                </Image> Disco Duro 1tb
            </div>
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
        <Accordion.Header><Image src={ `${ RUTA_BACKEND }/imagenes/pc2.jpg` } style={{height:"120px"}}></Image>Ranking #2</Accordion.Header>
        <Accordion.Body>
        <div>
                <Image
                src={ `${ RUTA_BACKEND }/imagenes/procesador.jpg` } style={{height:"80px"}}>
                </Image> Procesador Ryzen  5 3600
            </div>
            <br></br>
            <div>
                <Image
                src={ `${ RUTA_BACKEND }/imagenes/radeon.jpg` } style={{height:"70px"}}>
                </Image> Tarjeta de video Radeon
            </div>
            <br></br>
            <div>
            <Image
                src={ `${ RUTA_BACKEND }/imagenes/ram.jpg` } style={{height:"77px"}}>
                </Image> Ram de 16 GB
            </div>
            <br></br>
            <div>
                <Image
                src={ `${ RUTA_BACKEND }/imagenes/hdd.jpg` } style={{height:"80px"}}>
                </Image> Disco Duro 1tb
            </div>
        </Accordion.Body>
    </Accordion.Item>
    </Accordion>
    </Container>
    }
    makeFooter={ () => <Footer /> }
    />
}

export default RankingPC;