// src/styles/footer/styles.ts
import styled from "styled-components";
import { Colors, Spacing } from "../../styles/variables"; // Importando as variáveis

export const Container = styled.footer`
  background-color: ${Colors.background}; /* Usando a cor de fundo do arquivo variables.ts */
  padding: ${Spacing.medium} 0;
  color: ${Colors.secondary}; /* Usando a cor do texto do arquivo variables.ts */
  text-align: center;
`;

export const Text = styled.div`
  font-size: 1rem;
  margin-top: ${Spacing.small};

  p {
    margin-bottom: ${Spacing.small};
  }
`;
