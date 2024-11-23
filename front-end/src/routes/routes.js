// src/routes/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from '../login/components/loginForm'; 
import CadastroForm from '../login/components/cadastro'; 
import Header from '../paginaPrincipal/PaginaPrincipal';
import Curso from '../paginaPrincipal/components/CUrsos/Curso';
import Curso2 from '../paginaPrincipal/components/CUrsos/Curso2';
import Curso3 from '../paginaPrincipal/components/CUrsos/Curso3';
import Curso4 from '../paginaPrincipal/components/CUrsos/Curso4';
import Curso5 from '../paginaPrincipal/components/CUrsos/Curso5';
import Curso6 from '../paginaPrincipal/components/CUrsos/Curso6';


const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/cadastro" element={<CadastroForm />} />
                <Route path= "/pagina" element= {<Header/>}/>
                <Route path="/Curso" element={<Curso/>} />
                <Route path='/Curso2' element={<Curso2/>}/>
                <Route path='/Curso3' element= {<Curso3/>} />
                <Route path= '/Curso4' element={<Curso4/>}/>
                <Route path='/Curso5' element=  {<Curso5 />}/>            
                <Route path='Curso6' element={< Curso6/>} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
