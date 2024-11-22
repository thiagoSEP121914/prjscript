import React, { useState } from "react"; 
import styled from "styled-components"; 
import axios from "axios"; 
import { toast } from "react-toastify"; 
import { useNavigate } from "react-router-dom"; // Importando o hook useNavigate corretamente

const Container = styled.div` 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh;
    background-color: #fff;
`; 

const FormContainer = styled.form` 
    display: flex; 
    flex-direction: column; 
    background-color: #fff; 
    padding: 30px; 
    box-shadow: 0px 0px 5px #ccc; 
    border-radius: 5px; 
    width:400px;
`; 

const Input = styled.input` 
    padding: 10px; 
    margin-bottom: 10px; 
    border: 1px solid #bbb; 
    border-radius: 5px; 
`; 

const Button = styled.button` 
    padding: 10px; 
    cursor: pointer; 
    border-radius: 5px; 
    border: none; 
    background-color: #2c73d2; 
    color: white; 
`;

const RegisterLink = styled.p `
    text-align: center; 
    margin-top: 10px; 
`; 

const Titulo = styled.h1 `
    font-size:24px;
    color:#333;
    text-align:center;
    margin-bottom:20px;
`;

const LoginForm = () => { 
    const [email, setEmail] = useState(""); 
    const [senha, setSenha] = useState(""); 
    const navigate = useNavigate(); // Usando o hook de navegação

    const handleSubmit = async (e) => { 
        e.preventDefault(); 

        if (!email || !senha) { 
            return toast.warn("Preencha todos os campos"); 
        } 

        try { 
            const response = await axios.post("http://localhost:8800/loginForm", { 
                email, 
                senha, 
            }); 
            toast.success(response.data.message);
            navigate('/pagina'); // Aqui você usa o navigate corretamente
        } catch (error) { 
            toast.error(error.response?.data?.message || "Erro ao fazer login"); 
        } 
    }; 

    return ( 
        <Container>
            <FormContainer onSubmit={handleSubmit}> 
                <Titulo>Login</Titulo>
                <Input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                /> 
                <Input 
                    type="password" 
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                /> 
                <Button type="submit">Login</Button> 
                <RegisterLink>
                    não tem uma conta? <a href="./cadastro" >clique aqui</a>
                </RegisterLink>
            </FormContainer> 
        </Container>
    ); 
}; 

export default LoginForm;
