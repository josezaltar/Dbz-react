import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  NavList,
  NavItem,
  NavLink,
  HamburgerIcon,
  Menu,
  Overlay,
} from "./styles"; // Importando estilos

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o menu
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Fecha o menu ao clicar em um link
  };

  // Função para verificar o tamanho da tela e ajustar o estado do menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Fecha o menu quando a tela for maior que 768px
      }
    };

    window.addEventListener("resize", handleResize);

    // Chama a função na primeira renderização para corrigir o estado se necessário
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container isOpen={isMenuOpen}>
      {/* Overlay (escurece o fundo) */}
      <Overlay isOpen={isMenuOpen} onClick={handleToggleMenu} />

      {/* Ícone de Menu Sanduíche */}
      <HamburgerIcon onClick={handleToggleMenu} isOpen={isMenuOpen}>
        Menu
      </HamburgerIcon>

      {/* Menu (visível somente quando isMenuOpen for verdadeiro) */}
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
              Skins
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/comandos" onClick={handleLinkClick}>
              Comandos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/stage" onClick={handleLinkClick}>
              Stage
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
