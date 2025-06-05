// src/styles/header/styles.ts
import styled from "styled-components";
import { Link } from "react-router-dom"; // Importa o Link
import { Colors, Spacing, Fonts } from "../../styles/variables"; // Importando as variáveis

export const Container = styled.header`
  background-color: ${Colors.background}; /* Usando a cor de fundo do arquivo variables.ts */
  padding: ${Spacing.small} 0;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const NavItem = styled.li`
  margin: 0 ${Spacing.medium};
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.secondary}; /* Usando a cor do texto definida em variables.ts */
  font-size: 28px;
  font-family: ${Fonts.primary}; /* Usando a fonte principal definida em variables.ts */

  &:hover,
  &:focus {
    color: ${Colors.primary}; /* Cor primária para o hover/focus */
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
