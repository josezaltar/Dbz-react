import React from "react";
import { Link } from "react-router-dom"; // Importa o Link para navegação
import { Container, NavList, NavItem, NavLink } from "./styles"; // Importa os estilos

const Header: React.FC = () => {
  return (
    <Container>
      <nav>
        <NavList>
          <NavItem>
            <NavLink as={Link} to="/">
              Início
            </NavLink>{" "}
            {/* Rota para Home */}
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/about">
              Sobre o Jogo
            </NavLink>{" "}
            {/* Rota para About */}
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/downloads">
              Downloads
            </NavLink>{" "}
            {/* Rota para Downloads */}
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/personagens">
              Personagens
            </NavLink>{" "}
            {/* Rota para Personagens */}
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/comandos">
              Comandos do Jogo
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/quests">
              Guia de Quests
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/galeria">
              Galeria
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/comunidade">
              Comunidade
            </NavLink>
          </NavItem>
        </NavList>
      </nav>
    </Container>
  );
};

export default Header;
