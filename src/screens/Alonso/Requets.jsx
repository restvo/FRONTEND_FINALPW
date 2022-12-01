/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { } from "react-router-dom"
import React from "react"
import Layout from "../../Components/Layout"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
const Requets = () => {
  return <Layout
    makeHeader={ () => <Header titulo="¿Que uso le dara al equipo?" />}
    makeBody={
    () => <div>

      <div className="container text-center">
        <div className="row">
          <div className="col" style={{marginLeft:'10px'}}>
            <div className="card" style={{ width: '18rem' }}>
              <img src="./img/Ofimatica.jpg" className="card-img-top" alt="Ofimatica"></img>
              <div className="card-body">
                <h5 className="card-title">Ofimatica</h5>
                <p className="card-text">Microsoft office a 60 fps?.</p>
                <a href="/Ofimatica" className="btn btn-primary">Dale Candela</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: '18rem' }}>
              <img src="./img/programing.png" className="card-img-top" alt="programing"></img>
              <div className="card-body">
                <h5 className="card-title">Programacion</h5>
                <p className="card-text">¿Html no es suficente para ti y deseas programar como hombre?.</p>
                <a href="/Programing" className="btn btn-primary">¿Que esperas?</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: '18rem' }}>
              <img src="./img/GTA_Vice_City_Box_Art.png" className="card-img-top" alt="Gamming"></img>
              <div className="card-body">
                <h5 className="card-title">VideoJuegos</h5>
                <p className="card-text">Para correr los juegos de ultima generacion en alto rendimiento.</p>
                <a href="/Gamming" className="btn btn-primary">Let's dance baby</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    }
    makeFooter={() => <Footer />}
  />

}

export default Requets