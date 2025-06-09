// src/pages/Tutorial/styles.ts
import styled from "styled-components";
import { Colors, Spacing, Breakpoints, Shadows } from "../../styles/variables"; // Importando as variáveis

// Container para o conteúdo da página
export const Container = styled.section`
  padding: ${Spacing.xLarge} ${Spacing.medium};
  text-align: center;
  background-color: ${Colors.background}; /* Usando a cor de fundo definida em variables.ts */
  color: ${Colors.secondary}; /* Usando a cor de texto definida em variables.ts */
  border-radius: 10px;
  max-width: 95%;
  margin: ${Spacing.large} auto;
  overflow: hidden;
  box-shadow: ${Shadows.medium}; /* Usando sombra média definida em variables.ts */

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    flex-direction: column;
    padding: ${Spacing.large} ${Spacing.small};
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${Colors.verde}; /* Usando a cor primária definida em variables.ts */
  margin-bottom: ${Spacing.xLarge};
  text-align: center; /* Centraliza o título */
  -webkit-text-stroke: 0.8px #000;

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: ${Spacing.medium};
  background-color: #2c3e50;
  border-radius: 10px;
  color: ${Colors.secondary};
  width: 70%; /* Ajuste o tamanho do conteúdo principal */
  box-shadow: ${Shadows.medium};
`;

export const ContentTitle = styled.h2`
  font-size: 2rem;
  color: ${Colors.verde}; /* Usando a cor primária definida em variables.ts */
  margin-bottom: ${Spacing.medium};
  -webkit-text-stroke: 0.3px #000;
`;

export const ContentText = styled.p`
  font-size: 1.25rem;
  color: ${Colors.secondary};
  text-align: center;
  line-height: 1.8;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: ${Colors.background}; /* Alterado para combinar com o fundo */
  border-radius: 10px;
  width: 100%;
  box-shadow: ${Shadows.medium};
`;

export const ListItem = styled.li<{ selected: boolean }>`
  padding: ${Spacing.small} ${Spacing.medium};
  color: ${Colors.secondary};
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props) =>
    props.selected ? `${Colors.verde}` : "transparent"};

  &:hover {
    background-color: ${Colors.cardHover};
  }
`;
