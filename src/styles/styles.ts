// src/styles/styles.ts
import { createGlobalStyle } from "styled-components";
import { Colors, Fonts, Spacing, Shadows } from "./variables"; // Importando as variáveis

// Estilos globais usando styled-components
export const GlobalStyle = createGlobalStyle`
  /* Reset de margens e paddings */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos globais para o body */
  body {
    font-family: ${Fonts.primary}; /* Usando a fonte do arquivo variables.ts */
    background-color: ${Colors.background}; /* Usando a cor de fundo do arquivo variables.ts */
    color: ${Colors.secondary}; /* Usando a cor do texto do arquivo variables.ts */
    line-height: 1.6;
  }

  /* Estilo para o título principal h1 */
  h1 {
    font-size: 2rem;
    color: ${Colors.primary}; /* Usando a cor do título do arquivo variables.ts */
  }

  /* Estilo para links */
  a {
    text-decoration: none;
    color: inherit;
  }
`;
