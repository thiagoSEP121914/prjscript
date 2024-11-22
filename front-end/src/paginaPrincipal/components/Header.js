import React, { useState } from 'react';
import styled from 'styled-components';
import hamburgerIcon from '../../assets/hamburger.png'; 

// Estilos da Navbar
const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #2980b9;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.05px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

// Estilo do Menu
const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

// Estilo dos Links
const NavLink = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #ecf0f1;
    }
  }
`;

const HamburgerIcon = styled.div`
  display: block; /* Remover a condição de @media e garantir que o ícone esteja sempre visível */
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
`;

const H1 = styled.h1`
  font-size: 36px;  /* Tamanho do texto */
  font-weight: bold; /* Negrito */
  color: #ffffff; /* Cor do texto */
  text-align:center; /* Centralizado */
  margin-bottom: 20px; /* Espaçamento inferior */
`;

// Estilo para o menu mobile
const MobileNavMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #2980b9;
  color: #fff;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding-top: 60px;
  box-shadow: 2px 0px 6px rgba(0, 0, 0, 0.2);
`;

const MobileNavLink = styled.a`
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #2c3e50;
  font-size: 18px;

  &:hover {
    background-color:#3498db;
    color: #fff;
  }
`;

// Componente Navbar
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <>
      <NavbarContainer>
        <HamburgerIcon onClick={toggleMenu}>
          <img src={hamburgerIcon} alt="Menu" width="30" />
        </HamburgerIcon>
        <H1>Cursos Online</H1>
        <NavMenu>
          <NavLink>
            <a href= '#'>Home</a>
          </NavLink>
          <NavLink>
            <a href="#about">Contato</a>
          </NavLink>
           <NavLink>
                <a href='#cursos'>cursos</a>
            </NavLink> 
        </NavMenu>
      </NavbarContainer>

      {/* Menu lateral (para dispositivos móveis) */}
      <MobileNavMenu isOpen={isMenuOpen}>
        <MobileNavLink href="#Cursos" onClick={toggleMenu}>Home</MobileNavLink>
        <MobileNavLink href="#contact" onClick={toggleMenu}>Contato</MobileNavLink>
        <MobileNavLink>Cursos</MobileNavLink>
      </MobileNavMenu>
    </>
  );
};

export default Navbar;
