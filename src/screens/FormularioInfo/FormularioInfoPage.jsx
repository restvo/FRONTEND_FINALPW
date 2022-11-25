import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import FormularioInfo from "./components/FormularioInfo";
import BotonesForm from "./components/BotonesForm";
import { Row, Col, Button } from 'react-bootstrap'
import InfoDefault from "./components/InfoDefault";

const FormularioInfoPage = () => {
    return <Layout 
    makeHeader={ () => <Header titulo="IMPORTAR"/> }
    makeBody={ 
        () => <Row >
            <Col md={3} class ="col-6">
                <BotonesForm class="container align-items-center justify-content-center"/>
            </Col>
            <Col md={6} class ="col-6">
            <InfoDefault/>
            </Col>
            <Col md={9}>
                <FormularioInfo class="container align-items-center justify-content-center" />
            </Col>
        </Row> 
    }
    makeFooter={ () => <Footer />}/>
}
export default FormularioInfoPage


