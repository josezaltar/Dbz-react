import styled from "styled-components";
import { Colors, Breakpoints, Fonts } from "../../styles/variables";
import { Link } from "react-router-dom";

interface HamburgerIconProps {
  isOpen: boolean;
}

interface MenuProps {
  isOpen: boolean;
}

interface ContainerProps {
  isOpen: boolean; // Defina o tipo da propriedade isOpen aqui
}

export const Container = styled.header<ContainerProps>`
  background-color: ${Colors.background};
  padding: 1rem;
  font-family: "Arial", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative; /* Necessário para o posicionamento do ícone do menu */
  max-width: 100%;
  transition: background-color 0.3s ease; /* Transição para o fundo */

  /* Quando o menu estiver aberto, adicionamos um fundo escuro */
  ${({ isOpen }) =>
    isOpen &&
    `
      background-color: rgba(0, 0, 0, 0.7); /* Fundo escuro com transparência */
    `}

  @media (max-width: ${Breakpoints.tablet}) {
    justify-content: space-between;
  }
`;

export const Overlay = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo escuro com transparência */
  z-index: 4;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: all 0.3s ease;

  /* Exibir o overlay apenas em dispositivos móveis e tablets */
  @media (min-width: ${Breakpoints.tablet}) {
    visibility: hidden;
    opacity: 0;
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
  background-color: ${({ isOpen }) =>
    isOpen
      ? "transparent" // Fundo escuro somente quando o menu está aberto
      : "rgba(0, 0, 0, 0.7)"}; /* Para que o fundo do menu seja transparente antes de ser aberto */

  @media (max-width: ${Breakpoints.tablet}) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${({ isOpen }) =>
      isOpen
        ? "rgba(0, 0, 0, 0.7)"
        : "transparent"}; /* Escurece apenas no mobile */
    flex-direction: column;
    width: 100%;
    height: 100vh;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    padding: 1rem;
    z-index: 5;
  }

  /* Para desktop, garantir o fundo normal */
  @media (min-width: ${Breakpoints.tablet}) {
    opacity: 1;
    visibility: visible;
    position: static;
    flex-direction: row;
    height: auto;
    transform: none;
    background-color: ${Colors.background}; /* Fundo padrão do desktop */
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0;
  background-color: ${Colors.background};

  @media (max-width: ${Breakpoints.tablet}) {
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 15px 10px;
    border: ${Colors.primary} 5px solid;
    background-color: rgba(0, 0, 0, 0.3); /* Fundo escuro com transparência */
  }
`;

export const NavItem = styled.li`
  margin: 0 5px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border: ${Colors.primary} 0.3rem solid;

  @media (max-width: ${Breakpoints.tablet}) {
    margin: 8px 0;
    border: none;
    background-color: rgba(0, 0, 0, 0.3); /* Fundo escuro com transparência */
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
