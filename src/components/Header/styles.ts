import styled from "styled-components";
import { Colors, Breakpoints, Fonts } from "../../styles/variables";
import { Link } from "react-router-dom";

interface HamburgerIconProps {
  isOpen: boolean;
}

interface MenuProps {
  isOpen: boolean;
}

// Estilos do Container (Header)
export const Container = styled.header`
  background-color: ${Colors.background};
  padding: 1rem;
  font-family: "Arial", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Necessário para o posicionamento do ícone do menu */
  max-width: 100%;

  @media (max-width: ${Breakpoints.tablet}) {
    justify-content: space-between;
  }
`;

export const HamburgerIcon = styled.div<HamburgerIconProps>`
  display: none; /* Ícone oculto no desktop */
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: ${Colors.primary} 0.3rem solid;
  border-radius: 0.8rem;
  cursor: pointer;
  z-index: 10;
  padding: 0.8rem;
  color: ${Colors.primary};
  font-family: ${Fonts.heading}; /* Usa a fonte personalizada */
  font-size: 2rem; /* Tamanho do texto */
  font-weight: bold;
  text-align: center;
  -webkit-text-stroke: 0.03125rem #000; /* Contorno na fonte */

  /* Ao clicar no Menu, o Hamburger some para dispositivos móveis */
  @media (max-width: ${Breakpoints.tablet}) {
    display: flex; /* Exibe o 'Menu' no mobile */
    justify-content: center;
    align-items: center;

    /* Quando o menu está aberto, mova o ícone para fora da tela */
    transform: ${({ isOpen }) => (isOpen ? "translateX(-100%)" : "none")};
    transition: transform 0.3s ease;
  }
`;

export const Menu = styled.div<MenuProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: 100%;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  @media (max-width: ${Breakpoints.tablet}) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${Colors.background};
    flex-direction: column;
    width: 100%;
    height: 100vh;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    padding: 1rem;
    z-index: 5;
  }

  /* Menu visível para o desktop */
  @media (min-width: ${Breakpoints.tablet}) {
    opacity: 1;
    visibility: visible;
    position: static;
    flex-direction: row;
    height: auto;
    transform: none;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0;

  @media (max-width: ${Breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 0;
  }
`;

export const NavItem = styled.li`
  margin: 0;
  width: 100%; /* Garantindo que cada item ocupe 100% da largura do container */
  height: 50px; /* Tamanho fixo de altura para os itens do menu */
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap; /* Impede a quebra de linha */
  border: ${Colors.primary} 0.3rem solid;

  @media (max-width: ${Breakpoints.tablet}) {
    margin: 1rem 0;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.primary};
  font-size: 2rem; /* Tamanho de fonte para a versão normal (desktop) */
  font-family: ${Fonts.heading}; /* Usando a fonte 'SaiyanSans' para desktop */
  -webkit-text-stroke: 0.03125rem #000; /* Contorno na fonte */
  padding: 0.8rem;
  text-align: center; /* Garante que o texto esteja centralizado */
  width: 100%; /* Faz o link ocupar 100% do espaço disponível no item */
  display: flex;
  justify-content: space-between;
  align-items: center; /* Alinha o texto vertical e horizontalmente */

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.secondary};
    border-color: ${Colors.secondary}; /* Altera a borda ao passar o mouse */
    width: 100%;
    height: 100%;
    -webkit-text-stroke: 0.07rem #000; /* Contorno na fonte */
  }

  /* Ajuste do tamanho e fonte para tablets e dispositivos móveis */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 1.5rem; /* Tamanho de fonte para tablets */
    padding: 1rem; /* Aumenta o padding no tablet */
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 1.2rem; /* Tamanho de fonte para dispositivos móveis */
  }
`;
