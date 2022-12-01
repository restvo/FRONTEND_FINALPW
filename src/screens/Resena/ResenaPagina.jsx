import { useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Nombre from './components/Nombre'
import Resenas from './components/Resenas'


const ResenaPagina = () => {

    const [listadoResenas, setListadoResenas] = useState([])
    const [listadoNombres, setListadoNombres] = useState([])


    const httpObtenerResenas = async (usuarioId = null) => {
        const ruta = usuarioId == null?
            "http://localhost:4447/resenas" :
            `http://localhost:4444/cursos?usuario=${usuarioId}`

        const resp = await fetch(ruta)
        const data = await resp.json()
        console.log(data)
        setListadoResenas(data)

    }
    const httpObtenerNombres = async () => {
        const resp =  await fetch("http://localhost:4447/usuarios") 
        const data = await resp.json()
        console.log(data)
        setListadoNombres(data)
    }
    useEffect(() => {
        httpObtenerResenas();
        httpObtenerNombres();
    }, [])


    return <Layout
    makeHeader={() => <Header titulo="Resenas"/>}
    makeBody={()=> <div>
        <Nombre
        nombres={listadoNombres}
        />
        <Resenas
        resenas={ listadoResenas }
        />
 
    </div>}
    makeFooter={() => <Footer/>}
    />
}


export default ResenaPagina