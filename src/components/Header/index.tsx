import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  NavList,
  NavItem,
  NavLink,
  HamburgerIcon,
  Menu,
} from "./styles"; // Importando estilos

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <Container>
      {/* Ícone de Menu Sanduíche */}
      <HamburgerIcon onClick={handleToggleMenu}>Menu</HamburgerIcon>

      {/* Menu (visível somente em dispositivos móveis) */}
      <Menu isOpen={isMenuOpen}>
        <NavList>
          <NavItem>
            <NavLink as={Link} to="/" onClick={handleLinkClick}>
              Início
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/downloads" onClick={handleLinkClick}>
              Downloads
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/personagens" onClick={handleLinkClick}>
              Personagens
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/comandos" onClick={handleLinkClick}>
              Comandos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/quests" onClick={handleLinkClick}>
              Guia de Quests
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/galeria" onClick={handleLinkClick}>
              Galeria
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/comunidade" onClick={handleLinkClick}>
              Comunidade
            </NavLink>
          </NavItem>
        </NavList>
      </Menu>
    </Container>
  );
};

export default Header;
