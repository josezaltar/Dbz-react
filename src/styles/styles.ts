import { createGlobalStyle } from "styled-components";

// Estilos globais usando styled-components
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #1a252f;
    color: #f0f0f0;
    line-height: 1.6;
  }

  h1 {
    font-size: 2rem;
    color: #ff6600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
