/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { } from "react-router-dom";
import React from "react";
import ListaProductVendido from "./Auxiliar/ListaProductVendido";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../../components/Header";
import Layout  from "../../components/Layout";
import Footer from "../../components/Footer";


const RankTest = () => {

  const [listaProductoVendidos, setListaProductVendidos] = useState([])

  const httpObtenerProductVendidos = async() =>{
    const resp = await fetch("http://localhost:4447/productosA")
    const data = await resp.json()
    setListaProductVendidos(data)
  }

  useEffect(() => {
    httpObtenerProductVendidos()
  },[])

  return <Layout
    makeHeader={() => <Header titulo="Top 5 productos mas vendidos" />}
    makeBody={
      () => <div>
        <ListaProductVendido productos={listaProductoVendidos}/>
      </div>
    }

    makeFooter={()=> <Footer />}
  />
}

export default RankTest