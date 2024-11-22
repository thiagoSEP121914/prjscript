// src/routes/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from '../login/components/loginForm'; 
import CadastroForm from '../login/components/cadastro'; 
import Header from '../paginaPrincipal/PaginaPrincipal';

const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/cadastro" element={<CadastroForm />} />
                <Route path= "/pagina" element= {<Header/>}/>
            </Routes>
        </Router>
    );
};

export default RoutesComponent;
