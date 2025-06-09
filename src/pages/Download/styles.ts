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
    padding: ${Spacing.medium} ${Spacing.small}; /* Ajuste do padding para tablets */
  }

  @media (max-width: ${Breakpoints.mobile}) {
    padding: ${Spacing.small} ${Spacing.xsmall}; /* Ajuste do padding para dispositivos móveis */
  }
`;

export const Title = styled.h1`
  font-size: 8rem;
  color: ${Colors.verde}; /* Usando a cor primária definida em variables.ts */
  margin-bottom: 0;
  -webkit-text-stroke: 0.8px #000;

  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 4rem; /* Ajuste para tablets */
    -webkit-text-stroke: 1px #000;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 4rem; /* Ajuste para dispositivos móveis */
    -webkit-text-stroke: 1px #000;
  }
`;

export const DownloadItem = styled.div`
  -webkit-text-stroke: 0.2px #000;
  padding: ${Spacing.medium} ${Spacing.xsmall};
  margin: ${Spacing.xsmall} 0;
  border-radius: 10px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  h3 {
    font-size: 4rem;
    color: ${Colors.verde};
    -webkit-text-stroke: 0.85px #000;

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 2.5rem; /* Ajuste para tablets */
    }

    @media (max-width: ${Breakpoints.mobile}) {
      font-size: 2rem; /* Ajuste para dispositivos móveis */
    }
  }

  p {
    font-size: 1.7rem;

    @media (max-width: ${Breakpoints.tablet}) {
      font-size: 1.4rem; /* Ajuste para tablets */
    }

    @media (max-width: ${Breakpoints.mobile}) {
      font-size: 1.2rem; /* Ajuste para dispositivos móveis */
    }
  }
`;

export const Button = styled.a`
  -webkit-text-stroke: 1.2px ${Colors.black};
  display: inline-block;
  background-color: ${Colors.red}; /* Usando a cor primária definida em variables.ts */
  color: ${Colors.secondary};
  padding: ${Spacing.small} ${Spacing.medium};
  text-decoration: none;
  border-radius: 5px;
  font-size: 2rem;
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

  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 1.6rem; /* Ajuste para tablets */
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 1.4rem; /* Ajuste para dispositivos móveis */
  }
`;
