// src/styles/footer/styles.ts
import styled from "styled-components";
import { Colors, Spacing, Breakpoints } from "../../styles/variables"; // Importando as variáveis

export const Container = styled.footer`
  background-color: ${Colors.background}; /* Usando a cor de fundo do arquivo variables.ts */
  padding: ${Spacing.medium} 0;
  color: ${Colors.secondary}; /* Usando a cor do texto do arquivo variables.ts */
  text-align: center;
  font-size: 1rem; /* Usando rem para o tamanho da fonte */

  @media (max-width: ${Breakpoints.tablet}) {
    padding: ${Spacing.small} 0; /* Ajuste o padding para dispositivos menores */
    font-size: 0.95rem; /* Ajuste o tamanho da fonte para tablets */
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 0.85rem; /* Ajuste o tamanho da fonte em dispositivos móveis */
    padding: ${Spacing.small} 0; /* Ajuste o padding para telas pequenas */
  }
`;

export const Text = styled.div`
  font-size: 1rem; /* Usando rem para o tamanho da fonte */
  margin-top: ${Spacing.small}; /* Usando rem para a margem superior */

  p {
    margin-bottom: ${Spacing.small};
  }

  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 0.95rem; /* Ajuste o tamanho da fonte para tablets */
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 0.85rem; /* Ajuste o tamanho da fonte para dispositivos móveis */
    margin-top: ${Spacing.xsmall}; /* Menor margem superior em dispositivos móveis */
  }
`;
