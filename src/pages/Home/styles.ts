// src/pages/Home/styles.ts
import styled from "styled-components";
import { Colors, Spacing, Breakpoints } from "../../styles/variables"; // Importando as variáveis

// Container principal da página com bordas arredondadas, sombra e ajuste de espaçamento
export const Container = styled.section`
  padding: ${Spacing.medium} ${Spacing.medium};
  text-align: left; /* Alinhamento à esquerda */
  background-color: ${Colors.background}; /* Usando a cor de fundo definida em variables.ts */
  color: ${Colors.secondary}; /* Usando a cor de texto definida em variables.ts */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgb(255, 255, 255); /* Sombras mais suaves */
  max-width: 95%;
  margin: ${Spacing.large} auto;
  overflow: hidden;
  line-height: 1.8; /* Melhor legibilidade com o espaçamento entre as linhas */

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    padding: ${Spacing.medium} ${Spacing.small};
    margin: ${Spacing.medium} auto;
    text-align: left; /* Alinhamento à esquerda para telas menores */
  }
`;

// Título principal da página
export const Title = styled.h1`
  font-size: 3rem;
  color: ${Colors.primary}; /* Usando a cor primária definida em variables.ts */
  margin-bottom: ${Spacing.xLarge};
  text-align: center; /* Centraliza o título */
  -webkit-text-stroke: 0.8px #000;
  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 2.5rem; /* Ajusta o tamanho da fonte para dispositivos menores */
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 2rem; /* Ajusta o tamanho da fonte para dispositivos móveis */
  }
`;

// Texto em parágrafos
export const Text = styled.p`
  font-size: 1.25rem;
  margin: ${Spacing.small} 0;
  color: ${Colors.secondary}; /* Usando a cor de texto definida em variables.ts */
  text-align: justify; /* Justifica o texto */

  strong {
    color: ${Colors.primary}; /* Destaca palavras fortes em laranja */
  }

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 1.1rem; /* Ajusta o tamanho da fonte para dispositivos menores */
    text-align: left; /* Alinhamento à esquerda em dispositivos pequenos */
  }
`;

// Se você precisar de um subtítulo ou algo parecido
export const SubTitle = styled.h2`
  font-size: 1.75rem;
  color: ${Colors.primary}; /* Usando a cor primária definida em variables.ts */
  margin-bottom: ${Spacing.medium};
  text-align: left; /* Alinhado à esquerda para subtítulos */

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 1.5rem; /* Ajusta o tamanho da fonte para dispositivos menores */
  }
`;
