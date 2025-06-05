// src/styles/comunidade/styles.ts
import styled from "styled-components";
import {
  Colors,
  Spacing,
  Breakpoints,
  Shadows,
  Fonts,
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
  box-shadow: ${Shadows.medium}; /* Usando uma sombra definida em variables.ts */

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    padding: ${Spacing.medium} ${Spacing.small};
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${Colors.primary}; /* Cor do título definida em variables.ts */
  margin-bottom: ${Spacing.large};
  text-align: center;

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2rem;
  color: ${Colors.primary}; /* Cor do subtítulo definida em variables.ts */
  margin-bottom: ${Spacing.medium};
  text-align: center;
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
      color: rgb(53, 21, 230);
      text-decoration: none;
    }
  }
`;
