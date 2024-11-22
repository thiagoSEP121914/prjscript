import React, { useState } from "react";
import styled from "styled-components";


// Dados dos cursos

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh; /* Ocupa toda a altura da tela */
  width: 100%; 
  padding: 20px;
  background-color: #ffffff;
  color: black;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  overflow-y: auto; /* Adiciona a barra de rolagem vertical */
`;

const Title = styled.h1`
  margin-bottom: 10px;
  margin-top:70px;
  color:#2980b9;
`;

const CourseList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 70%;
  margin-top: 70px;
`;

const CourseItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  margin-bottom: 25px;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const CourseInfo = styled.div`
  flex: 1;
`;

const CourseTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #3498db;
`;

const ProgressBar = styled.div`
  width: 70%;
  height: 10px;
  background: #444;
  border-radius: 5px;
  margin-top: 10px;
  position: relative;
`;

const Progress = styled.div`
  height: 100%;
  background: #3498db;
  border-radius: 5px;
  width: ${(props) => props.width}%;
`;

const AccessButton = styled.a`
  text-decoration: none;
  color: #3498db;
  padding: 10px 20px;
  border: 1px solid #3498db;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #3498db;
    color: white;
  }
`;
const PDFiframe = styled.iframe `
  width:100%;
  height:600px;
  border:none;
  margin-top: 1opx;
`;
const Body = () => {

  const cursosData = [
    { nome: "Big Data & Analytics", progresso: 0, link: '/Curso.pdf'},
    { nome: "Blockchain Advanced", progresso: 0, link: "/Curso.pdf" },
    { nome: "Business Intelligence (BI)", progresso: 0, link: "/Curso.pdf" },
    { nome: "Cloud Fundamentals", progresso: 0, link: "/Curso.pdf" },
    { nome: "Customer Experience Management", progresso: 0, link: "/Curso.pdf" },
    { nome: "Cybersecurity", progresso: 0, link: "/Curso.pdf" },
  ];

  const [cursos] = useState(cursosData);

  return (
    <Container>
      <Title>Seus Cursos - Programa Eu Capacito</Title>
      <CourseList>
        {cursos.map((curso, index) => (
          <CourseItem key={index}>
            <CourseInfo>
              <CourseTitle>{curso.nome}</CourseTitle>
              <ProgressBar>
                <Progress width={curso.progresso}></Progress>
              </ProgressBar>
            </CourseInfo>
            <AccessButton 
              href={curso.link}
               target={curso.link === "#" ? "_self" : "_blank"} 
               rel={curso.link === "#" ? undefined : "noopener noreferrer"}
            >Acessar</AccessButton>
          </CourseItem>
        ))}
      </CourseList>
    </Container>
  );
};
export default Body;
