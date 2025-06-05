// src/pages/Download/styles.ts
import styled from "styled-components";
import { Colors, Spacing, Breakpoints, Shadows } from "../../styles/variables"; // Importando as variáveis

export const Container = styled.section`
  padding: ${Spacing.large} ${Spacing.small};
  text-align: center; /* Centraliza o conteúdo */
  background-color: ${Colors.background}; /* Usando a cor de fundo definida em variables.ts */
  color: ${Colors.secondary}; /* Usando a cor de texto definida em variables.ts */
  border-radius: 10px;
  max-width: 95%;
  margin: ${Spacing.large} auto;
  overflow: hidden;
  box-shadow: ${Shadows.heavy}; /* Usando sombra média definida em variables.ts */

  @media (max-width: ${Breakpoints.tablet}) {
    padding: ${Spacing.medium} ${Spacing.small};
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${Colors.primary}; /* Usando a cor primária definida em variables.ts */
  margin-bottom: ${Spacing.large};
  -webkit-text-stroke: 0.8px #000;

  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

export const DownloadItem = styled.div`
  -webkit-text-stroke: 0.2px #000;
  padding: ${Spacing.medium};
  margin: ${Spacing.medium} 0;
  border-radius: 10px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.a`
  -webkit-text-stroke: 0.6px #000;
  display: inline-block;
  background-color: ${Colors.primary}; /* Usando a cor primária definida em variables.ts */
  color: ${Colors.secondary};
  padding: ${Spacing.small} ${Spacing.medium};
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: ${Spacing.medium};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${Colors.cardHover}; /* Usando a cor de hover definida em variables.ts */
    transform: scale(1.05);
    outline: none;
  }

  &:active {
    background-color: #b44000;
  }
`;
