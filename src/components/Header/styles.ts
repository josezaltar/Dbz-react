import styled from "styled-components";
import { Link } from "react-router-dom"; // Importa o Link
import { Colors, Fonts, Breakpoints } from "../../styles/variables"; // Importando as variáveis

export const Container = styled.header`
  background-color: ${Colors.background};
  padding: 10px 0;
  font-family: ${Fonts.heading}; /* Usando a fonte personalizada SaiyanSans */
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const NavItem = styled.li`
  margin: 0 15px;
  border-bottom: 2px solid ${Colors.primary};
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.primary};
  font-size: 42px;
  font-family: ${Fonts.heading};
  -webkit-text-stroke: 0.5px #000;

  /* Usando a fonte personalizada para o texto dos links */

  &:hover,
  &:focus {
    color: ${Colors.primary}; // Cor primária
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 24px; /* Ajuste para dispositivos menores */
  }
`;
