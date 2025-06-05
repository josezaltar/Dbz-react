import styled from "styled-components";
import { Link } from "react-router-dom"; // Importa o Link
import { Colors, Fonts, Breakpoints } from "../../styles/variables"; // Importando as variáveis

export const Container = styled.header`
  background-color: ${Colors.background};
  padding: 10px 0;
  font-family: ${Fonts.heading}; /* Usando a fonte personalizada SaiyanSans */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  @media (max-width: ${Breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 10px; /* Ajuste do padding para telas muito pequenas */
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${Breakpoints.tablet}) {
    justify-content: flex-start;
    width: 100%;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    justify-content: flex-start;
    width: 100%;
    padding: 0 10px; /* Ajuste do padding para dispositivos móveis */
  }
`;

export const NavItem = styled.li`
  margin: 0 15px;
  border-bottom: 2px solid ${Colors.primary};
  display: inline-block;

  @media (max-width: ${Breakpoints.tablet}) {
    margin: 10px 0;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    margin: 5px 0; /* Ajuste da margem para dispositivos móveis */
  }
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
    font-size: 18px; /* Ajuste para dispositivos menores */
    margin-right: 8px;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 18px; /* Ajuste para dispositivos móveis */
  }
`;
