import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { Row, Col, Button } from 'react-bootstrap';
import Botones from "./components/Botones";
import Categorias from "./components/Categorias";
import ListaCarrito from "./components/ListaCarrito";
import ListadoComponents from "./components/ListaProductos";
import Suma from "./components/Suma";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import ListaProductos from "./components/ListaProductos";
import Prueba from "./components/Prueba";

const ArmadoConocedorPage = () => {
    const [ListadoCategorias, setListadoCategorias] = useState([]);
    const [ListadoProductos, setListadoProductos ] = useState([]);
    const [ListadoCarrito, setListadoCarrito] = useState([]);

    const navigate = useNavigate()

    const token = localStorage.getItem("TOKEN")
    

    const httpObtenerCategorias = async () => {
        const response = await fetch("http://localhost:4447/categoria_producto");
        const data = await response.json();
        console.log(data);
        setListadoCategorias(data);
    }

    const httpObtenerProductos = async (categoriaId = null) => {
        const ruta = categoriaId == null ?
            "http://localhost:4447/productos" :
            `http://localhost:4447/productos?categoria_prod=${categoriaId}`

        const response = await fetch(ruta);
        const data = await response.json();
        console.log(data);
        setListadoProductos(data);
    }
    const httpOtenerCarrito = async (productoId = null) => {
        const ruta = productoId == null ?
            "http://localhost:4447/orden" :
            `http://localhost:4447/orden?producto=${productoId}`

        const response = await fetch(ruta);
        const data = await response.json();
        console.log(data);
        setListadoCarrito(data);
    }
    useEffect(() => {
        httpObtenerCategorias();
        httpObtenerProductos();
        httpOtenerCarrito();
    }, []) 
    
    const onCategoriaSelected = (categoriaId) => {
        console.log("Categoria seleccionada: " + categoriaId);
        httpObtenerProductos(categoriaId);
    }

    /*const onProductoSelected = (productoId) => {
        navigate(`/FormularioInfo/${productoId}`)
    }*/

    return <Layout 
    makeHeader={ () => <Header titulo={`ARMADO CONOCEDOR -
     Usuario: ${token} 
    `}/> }
    makeBody={ 
        () => <div >
            <Col md={3} className ="col-6">
                <Categorias className="container align-items-center justify-content-center" 
                        categorias = { ListadoCategorias }
                        onCategoriaSelected = { onCategoriaSelected }/>
                
            </Col>
            <Col md={2}>
            <div>COMPONENTES: </div>
            <ListaProductos className="container align-items-center justify-content-center"
                                      productos={ ListadoProductos }
                                      />      
    
            </Col>
            <Col md={2}>
                <div>CARRITO: </div>
            <Prueba classNameName="container align-items-center justify-content-center"
                                    carrito = { ListadoProductos}/>                                                                  
            </Col>
            <Col md={1}>
                <div>TOTAL:</div>
            <Suma classNameName="container align-items-center justify-content-center" />
            </Col>
            <p></p>
            <Botones classNameName="container align-items-center justify-content-center"/>
        </div> 
        
    }
    makeFooter={ () => <Footer />}/>
}   
export default ArmadoConocedorPage

