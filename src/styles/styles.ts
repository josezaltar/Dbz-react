// src/styles/styles.ts
import { createGlobalStyle } from "styled-components";
import { Colors, Fonts } from "./variables"; // Importando as variáveis

export const GlobalStyle = createGlobalStyle`
  /* Carregar a fonte personalizada */
  @font-face {
  font-family: 'SaiyanSans';
  src: url('./assets/fonts/Saiyan-Sans.ttf') format('truetype'); /* Caminho relativo correto */
  font-weight: normal;
  font-style: normal;
}

  /* Reset de margens e paddings */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Estilos globais para o body */
  body {
    font-family: ${Fonts.primary}; /* Usando a fonte principal para o corpo */
    background-color: ${Colors.background};
    color: ${Colors.secondary};
    line-height: 1.6;
  }

  /* Estilo para títulos */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${Fonts.heading}; /* Usando a fonte SaiyanSans para os títulos */
  }

  /* Estilo para links */
  a {
    text-decoration: none;
    color: inherit;
  }

`;
