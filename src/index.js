import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './screens/Login/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListadoCursosPage from './screens/ListadoCursos/ListadoCursosPage';
import ListadoEvaluacionesPage from './screens/ListadoEvaluaciones/ListadoEvaluacionesPage';
import FormularioEvaluacionPage from './screens/FornularioEvaluacion/FormularioEvaluacionPage';
import RegistroPage from './screens/Registro/RegistroPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormularioInfo from './screens/FormularioInfo/components/FormularioInfo';
import FormularioInfoPage from './screens/FormularioInfo/FormularioInfoPage';
import ArmadoConocedorPage from './screens/ArmadoConocedor/ArmadoConocedorPage';
import PrincipalJuegos from './screens/Juegos/PrincipalJuegos';
import Epic from './screens/Juegos/Epic';
import Steam from './screens/Juegos/Steam';
import PcArmadaComp from './screens/RecomendacionPcArmada/PcArmadaComp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<LoginPage/>}/>
        <Route path='/cursos' element={ <ListadoCursosPage /> }/>
        <Route path='/evaluaciones/:cursoId' element={ <ListadoEvaluacionesPage /> }/>
        <Route path= '/FormularioInfo' element= { <FormularioInfoPage /> }/>
        <Route path= '/Conocedores' element= { <ArmadoConocedorPage /> }/>
        <Route path= '/login' element={ <LoginPage /> }/>
        <Route path= '/PrincipalJuegos' element={ <PrincipalJuegos /> }/>
        <Route path = '/Epic' element = { <Epic/> }/>
        <Route path = '/Steam' element = { <Steam/> }/>
        <Route path= '/PcArmadaComp' element={ <PcArmadaComp /> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

