import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

// Componente para o contêiner principal
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o conteúdo ocupe 100% da altura da tela */
`;

const Pagina = () => {
  return (
    <PageContainer>
        <Header />
        <Body />
        <Footer />
    </PageContainer>
  );
};

export default Pagina;
