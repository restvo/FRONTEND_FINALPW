import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import ComponentesPC from "./components/ComponentesPC";
import ListaPcArmadas from "./components/ListaPcArmadas";


const PcArmadaComp = () => {
        const [ListadoTiposPc, setListadoTiposPc] = useState([]);
        const [ListadoProductosPC, setListadoProductosPC ] = useState([]);

        const httpObtenerTiposPc = async () => {
            const response = await fetch("http://localhost:4447/pcarm_producto");
            const data = await response.json();
            console.log(data);
            setListadoTiposPc(data);
        }
        const httpObtenerProductos = async (pc_armada_prodId = null) => {
            const ruta = pc_armada_prodId == null ?
                "http://localhost:4447/pcxcomponentes" :
                `http://localhost:4447/pcxcomponentes?pc_armado_producto=${pc_armada_prodId}`
    
            const response = await fetch(ruta);
            const data = await response.json();
            console.log(data);
            setListadoProductosPC(data);
        }

        useEffect(() => {
            httpObtenerTiposPc();
            httpObtenerProductos();
        }, []) 

        const onTipoPcSelected = (pc_armada_prodId) => {
            console.log("PC seleccionada: " + pc_armada_prodId);
            httpObtenerProductos(pc_armada_prodId);
        }


    return <Layout 
    makeHeader={ () => <Header titulo={"XD" }/> }
    makeBody={ 
        () => <div >
            <Col md={3} className ="col-6">
                <ListaPcArmadas className="container align-items-center justify-content-center" 
                        tipo_pc = { ListadoTiposPc }
                        onTipoPcSelected = { onTipoPcSelected }/>
                
            </Col>
            <Col md={2}>
            <div>COMPONENTES: </div>
            <ComponentesPC className="container align-items-center justify-content-center"
                                      productosXpc ={ ListadoProductosPC }
                                      />      
          </Col>
        </div> 
        
    }
    makeFooter={ () => <Footer />}/>
}   



export default PcArmadaComp;











