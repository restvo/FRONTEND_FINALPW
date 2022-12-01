import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './screens/Login/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistroPage from './screens/Registro/RegistroPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormularioInfo from './screens/FormularioInfo/components/FormularioInfo';
import FormularioInfoPage from './screens/FormularioInfo/FormularioInfoPage';
import ArmadoConocedorPage from './screens/ArmadoConocedor/ArmadoConocedorPage';
import PrincipalJuegos from './screens/Juegos/PrincipalJuegos';
import Epic from './screens/Juegos/Epic';
import Steam from './screens/Juegos/Steam';
import PcArmadaComp from './screens/RecomendacionPcArmada/PcArmadaComp';
import PrincipalPagina from './screens/Principal/PrincipalPagina';
import Prueba from './screens/Alonso/Prueba';
import Product from './screens/Alonso/Product';
import RankTest from './screens/Alonso/RankTest';
import ResenaPagina from './screens/Resena/ResenaPagina';
import RankingPC from './screens/RankingPCs/RankingPC';

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LoginPage/>}/>
        <Route path= '/FormularioInfo' element= { <FormularioInfoPage /> }/>
        <Route path= '/Conocedores' element= { <ArmadoConocedorPage /> }/>
        <Route path= '/login' element={ <LoginPage /> }/>
        <Route path= '/PrincipalJuegos' element={ <PrincipalJuegos /> }/>
        <Route path = '/Epic' element = { <Epic/> }/>
        <Route path = '/Steam' element = { <Steam/> }/>
        <Route path= '/PcArmadaComp' element={ <PcArmadaComp /> }/>
        <Route path= '/Principal' element= { <PrincipalPagina /> }/>
        <Route path= '/registro' element={ <RegistroPage /> }/>
        <Route path='/Prueba' element={<Prueba />}/>
        <Route path='/RankTest' element={<RankTest />}/>
        <Route path= '/resena' element={ <ResenaPagina /> }/>
        <Route path= '/rankingpc' element={ <RankingPC /> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

