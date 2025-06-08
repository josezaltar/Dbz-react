// src/styles/comunidade/styles.ts
import styled from "styled-components";
import {
  Colors,
  Spacing,
  Breakpoints,
  Fonts,
  Shadows,
} from "../../styles/variables"; // Importando as variáveis

export const Container = styled.section`
  padding: ${Spacing.large} ${Spacing.small};
  text-align: center;
  background-color: ${Colors.background}; /* Usando a cor de fundo definida em variables.ts */
  color: ${Colors.secondary}; /* Usando a cor de texto definida em variables.ts */
  border-radius: 10px;
  max-width: 95%;
  margin: ${Spacing.large} auto;
  overflow: hidden;
  box-shadow: ${Shadows.heavy}; /* Sombras mais suaves */

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    padding: ${Spacing.medium} ${Spacing.small};
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${Colors.primary}; /* Cor do texto */
  margin-bottom: ${Spacing.xLarge};
  text-align: center;
  font-weight: bold;
  font-family: ${Fonts.heading}; /* Usando a fonte personalizada */

  /* Adicionando o contorno */
  -webkit-text-stroke: 0.8px #000; /* Defina a espessura e a cor do contorno */

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 2.5rem; /* Ajusta o tamanho da fonte para dispositivos menores */
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 2rem; /* Ajusta o tamanho da fonte para dispositivos móveis */
  }
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  color: ${Colors.primary}; /* Cor do subtítulo definida em variables.ts */
  margin-bottom: ${Spacing.medium};
  text-align: center;
  -webkit-text-stroke: 0.8px #000;
`;

export const Text = styled.p`
  font-size: 1.25rem;
  margin-top: ${Spacing.small};
  color: ${Colors.secondary};
  text-align: center;
  margin-bottom: ${Spacing.xLarge};

  strong {
    color: ${Colors.primary}; /* Cor para o texto em negrito */
  }

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 1.1rem;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: ${Spacing.small} ${Spacing.medium};
  text-align: center;

  li {
    font-size: 1.1rem;
    margin-bottom: ${Spacing.small};
    color: ${Colors.secondary};

    strong {
      color: ${Colors.primary}; /* Cor para o texto em negrito */
    }

    a {
      color: ${Colors.secondary};
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center; /* Garante que o ícone e o texto fiquem alinhados */
      gap: 10px; /* Adiciona espaço entre o ícone e o texto */
    }

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
`;
