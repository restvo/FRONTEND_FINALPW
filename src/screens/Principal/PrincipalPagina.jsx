import { Button, Container} from 'react-bootstrap'
import Newsletter from './components/Newsletter'
import { useNavigate } from 'react-router'
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const PrincipalPagina = () => {

    const navigate = useNavigate()
    
    function navegar (){
        navigate('/PcArmadaComp')
    }

    function navegar2 (){
        navigate('/Conocedores')
    }
    function navegar3 (){
        navigate('/PrincipalJuegos')
    }
    function navegar4 (){
        navigate('/resena')
    }
    return <Layout
    makeHeader={ () => <Header titulo="PAGINA PRINCIPAL"/> }
    makeBody={  
        () => <div>
        <Container>
        <h1>Build your PC!</h1>
        <h3>Just for what you need</h3>
        <Button className='mt-3' variant='warning' onClick = { navegar }>Build for begginer</Button><p></p>
        <Button className='mt-3' variant='warning' onClick = { navegar2 } >Adavanced building</Button><p></p>
        <Button className='mt-3' variant='warning' onClick = { navegar3 } >Juegos Gratis :O</Button><p></p>
        
        
    </Container>
    <Newsletter />
    </div>}
    makeFooter = { () => <Footer />}/>
}

export default PrincipalPagina