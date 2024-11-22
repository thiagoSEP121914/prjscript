import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height:10vh;

  padding: 5px;
  background-color:#2980b9;  /* Cor de fundo azul */
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  position: fixed; /* Fixa o footer na parte inferior */
  bottom: 0; /* Garante que o footer fique na parte de baixo */
  left: 0; /* Alinha o footer à esquerda da tela */
`;

const FooterTitle = styled.h2`
  margin: 0;
  padding-bottom: 10px;
  font-size: 18px;
  color: white; /* Cor do título */
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction:row;
  gap: 20px;
`;

const ContactItem = styled.p`
  margin: 0;
  font-size: 14px;
  color: white; /* Cor dos textos de contato */
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #3498db;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Entre em Contato</FooterTitle>
      <ContactInfo>
        <ContactItem>Email: exemplo@dominio.com</ContactItem>
        <ContactItem>Telefone: +55 11 1234-5678</ContactItem>
        <ContactItem>Endereço: Rua Exemplo, 123 - São Paulo, SP</ContactItem>
      </ContactInfo>
      <SocialLinks>
        <SocialLink href="https://facebook.com" target="_blank">Facebook</SocialLink>
        <SocialLink href="https://instagram.com" target="_blank">Instagram</SocialLink>
        <SocialLink href="https://twitter.com" target="_blank">Twitter</SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
