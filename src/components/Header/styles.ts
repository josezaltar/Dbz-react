import styled from "styled-components";
import { Colors, Breakpoints, Fonts } from "../../styles/variables";
import { Link } from "react-router-dom";

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

// Estilo do ícone de menu sanduíche
export const HamburgerIcon = styled.div`
  display: none;
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

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.secondary};
  }

  @media (max-width: ${Breakpoints.tablet}) {
    display: flex; /* Exibe o 'Menu' no mobile */
    justify-content: center;
    align-items: center;
  }
`;

// Estilo para o menu que será mostrado/ocultado no celular
export const Menu = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: 100%;

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
`;

// Estilos para o item de navegação
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
  margin: 0 10px;
  width: 100%; /* Garantindo que cada item ocupe 100% da largura do container */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  border: ${Colors.primary} 0.3rem solid;
  border-radius: 0.8rem;
  text-align: center; /* Garante que o conteúdo esteja centralizado */

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
  padding: 0 8px;
  text-align: center; /* Garante que o texto esteja centralizado */
  height: 100%; /* Faz o link ocupar 100% do espaço disponível no item */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* Alinha o texto vertical e horizontalmente */
  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.secondary};
    width: 100%;
    height: 100%;
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
