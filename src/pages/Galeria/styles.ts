// src/pages/Galeria/styles.ts
import styled from "styled-components";
import { Colors, Spacing, Breakpoints, Shadows } from "../../styles/variables"; // Importando as variáveis

export const Container = styled.section`
  padding: ${Spacing.large} ${Spacing.small};
  text-align: center;
  background-color: ${Colors.background}; /* Usando a cor de fundo definida em variables.ts */
  color: ${Colors.secondary}; /* Usando a cor de texto definida em variables.ts */
  border-radius: 10px;
  max-width: 95%;
  margin: ${Spacing.large} auto;
  overflow: hidden;
  box-shadow: ${Shadows.heavy}; /* Usando sombra média definida em variables.ts */

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    padding: ${Spacing.medium} ${Spacing.small};
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${Colors.primary}; /* Usando a cor primária definida em variables.ts */
  margin-bottom: ${Spacing.large};
  text-align: center;
  -webkit-text-stroke: 0.8px #000;

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  -webkit-text-stroke: 0.5px #000;
  font-size: 2rem;
  color: ${Colors.primary}; /* Usando a cor primária definida em variables.ts */
  margin-bottom: ${Spacing.medium};
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.25rem;
  margin-top: ${Spacing.small};
  color: ${Colors.secondary}; /* Usando a cor de texto definida em variables.ts */
  text-align: center;
  margin-bottom: ${Spacing.xLarge};

  strong {
    color: ${Colors.primary}; /* Destaca palavras fortes em laranja */
  }

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 1.1rem;
  }
`;

export const VideoContainer = styled.div`
  max-width: 100%;
  margin: ${Spacing.medium} 0;
  display: flex;
  justify-content: center;

  iframe {
    border-radius: 10px;
    box-shadow: ${Shadows.medium}; /* Usando sombra média definida em variables.ts */
  }
`;
