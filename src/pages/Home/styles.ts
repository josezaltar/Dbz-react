// src/pages/Home/styles.ts
import styled from "styled-components";
import { Colors, Spacing, Breakpoints } from "../../styles/variables"; // Importando as variáveis

/// src/pages/Home/styles.ts
// src/pages/Home/styles.ts
export const Container = styled.section`
  padding: ${Spacing.medium} ${Spacing.medium};
  text-align: left;
  background-color: ${Colors.background};
  color: ${Colors.secondary};
  border-radius: 10px;
  box-shadow: 0 4px 15px rgb(255, 255, 255);
  max-width: 100%;
  margin: ${Spacing.large} auto;
  overflow-y: auto; /* Permite rolagem vertical */
  line-height: 1.8;
  min-height: auto; /* Garante que o conteúdo possa crescer para se ajustar */

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    padding: ${Spacing.medium} ${Spacing.small};
    margin: ${Spacing.medium} auto;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    padding: ${Spacing.small} ${Spacing.xsmall}; /* Ajuste para dispositivos móveis */
  }
`;

// Título principal da página
export const Title = styled.h1`
  font-size: 6rem;
  color: ${Colors.verde}; /* Cor primária para o título, laranja vibrante */
  margin-bottom: ${Spacing.large};
  text-align: center; /* Centraliza o título */
  -webkit-text-stroke: 0.4px #000; /* Destaque no contorno do título para dar um efeito mais épico */

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
  color: ${Colors.secondary}; /* Cor de texto (branco) */
  text-align: justify; /* Justifica o texto */

  strong {
    color: ${Colors.verde}; /* Destaca palavras fortes com a cor laranja vibrante */
  }

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 1.1rem; /* Ajusta o tamanho da fonte para dispositivos menores */
    text-align: left; /* Alinhamento à esquerda em dispositivos pequenos */
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 1rem; /* Ajuste para dispositivos móveis */
    margin-top: ${Spacing.xsmall}; /* Reduzindo a margem superior para dispositivos móveis */
  }
`;

// Se você precisar de um subtítulo ou algo parecido
export const SubTitle = styled.h2`
  font-size: 1.75rem;
  color: ${Colors.primary}; /* Usando o laranja vibrante para subtítulos */
  margin-bottom: ${Spacing.medium};
  text-align: left; /* Alinhado à esquerda para subtítulos */

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 1.5rem; /* Ajusta o tamanho da fonte para dispositivos menores */
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 1.25rem; /* Ajuste para dispositivos móveis */
  }
`;
