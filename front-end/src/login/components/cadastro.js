import React, { useState } from "react"; 
import styled from "styled-components"; 
import axios from "axios"; 
import { toast } from "react-toastify"; 

const Container = styled.div` 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    height: 100vh; /* Ocupa a altura total da tela */
    background-color: #fff; /* Cor de fundo opcional */
`;

const FormContainer = styled.form` 
    display: flex; 
    flex-direction: column; 
    background-color: #fff; 
    padding: 20px; 
    box-shadow: 0px 0px 5px #ccc; 
    border-radius: 5px; 
    width: 400px; 
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

const RegisterLink = styled.p` 
    text-align: center; 
    margin-top: 10px; 
`; 

const Titulo = styled.h1`
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
`;


const CadastroForm = () => { 
    const [nome, setNome] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [password2, setPassword2] = useState(""); 

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        console.log({nome, email, password})
        
        if (!nome || !email || !password || !password2) { 
            return toast.warn("Preencha todos os campos"); 
        } 
    
        if (password !== password2) {
            return toast.warn("As senhas não correspondem");
        }
    
    
        try { 
            const response = await axios.post("http://localhost:8800/cadastro", { 
                nome, 
                email, 
                password 
            });  
            console.log("API respondeu com:", response.data);
            toast.success("É SUCESSO!");
            setNome("");
            setEmail("");
            setPassword("");
            setPassword2("");
            
        } catch (error) { 
            console.error("Erro ao cadastrar:", error); // Melhore a mensagem de erro
            const message = error.response?.data.message || "Erro ao cadastrar";
            toast.error(message);
        } 
    
        
    };
    

    return ( 
       
        <Container>
                <FormContainer onSubmit={handleSubmit}> 
           <Titulo>Cadastro</Titulo>
            <Input 
                type="text" 
                placeholder="Digite seu nome" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
            /> 
            <Input 
                type="email" 
                placeholder="E-mail" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            /> 
            <Input 
                type="password" 
                placeholder="Senha" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            /> 
            <Input 
                type="password" 
                placeholder="Confirme sua senha" 
                value={password2} 
                onChange={(e) => setPassword2(e.target.value)} 
            /> 
            <Button type="submit">Cadastrar</Button> 
            <RegisterLink>
                Já possui uma conta? <a href="./">Clique aqui</a>
            </RegisterLink>
        </FormContainer>
        </Container>
        
    ); 
}; 

export default CadastroForm; 
