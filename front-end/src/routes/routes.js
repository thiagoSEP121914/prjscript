// src/routes/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from '../login/components/loginForm'; 
import CadastroForm from '../login/components/cadastro'; 
import Header from '../paginaPrincipal/PaginaPrincipal';
import Curso from '../paginaPrincipal/components/Curso';


const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/cadastro" element={<CadastroForm />} />
                <Route path= "/pagina" element= {<Header/>}/>
                <Route path="/Curso" element={<Curso/>} />
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
