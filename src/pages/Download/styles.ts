import styled from "styled-components";
import { Colors, Spacing, Breakpoints, Shadows } from "../../styles/variables"; // Importando as variáveis

// Estilos Comuns
const textAlignCenter = `
  text-align: center;
`;

const fontSize = {
  title: "8rem",
  subtitle: "4rem",
  paragraph: "1.7rem",
  button: "2rem",
};

const padding = {
  default: `${Spacing.medium} ${Spacing.small}`,
  small: `${Spacing.small} ${Spacing.xsmall}`,
};

const buttonHoverStyles = `
  background-color: ${Colors.cardHover};
  transform: scale(1.05);
`;

export const Container = styled.section`
  padding: ${padding.default};
  background-color: ${Colors.background};
  color: ${Colors.text};
  border-radius: 10px;
  max-width: 95%;
  margin: ${Spacing.large} auto;
  overflow: hidden;
  box-shadow: ${Shadows.heavy};
  ${textAlignCenter};

  @media (max-width: ${Breakpoints.sm}) {
    padding: ${padding.small};
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: ${Colors.primary};
  margin-bottom: 0;
  -webkit-text-stroke: 0.8px #000;
  ${textAlignCenter};

  @media (max-width: ${Breakpoints.md}) {
    font-size: clamp(2.5rem, 7vw, 4rem);
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: clamp(2rem, 6vw, 4rem);
  }
`;

export const DownloadItem = styled.div`
  -webkit-text-stroke: 0.2px #000;
  padding: ${Spacing.xsmall} ${Spacing.xsmall};
  margin: ${Spacing.xsmall} 0;
  border-radius: 10px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  h3 {
    font-size: clamp(2rem, 4vw, 2.8rem);
    color: ${Colors.primary};
    -webkit-text-stroke: 0.85px #000;

    @media (max-width: ${Breakpoints.md}) {
      font-size: 2.5rem;
    }

    @media (max-width: ${Breakpoints.sm}) {
      font-size: 2rem;
    }
  }

  p {
    font-size: clamp(1.1rem, 2vw, 1.4rem);

    @media (max-width: ${Breakpoints.sm}) {
      font-size: 1.2rem;
    }
  }
`;

export const Button = styled.a`
  -webkit-text-stroke: 1.2px ${Colors.black};
  display: inline-block;
  background-color: ${Colors.red};
  color: ${Colors.text};
  padding: ${Spacing.small} ${Spacing.medium};
  text-decoration: none;
  border-radius: 5px;
  font-size: ${fontSize.button};
  font-weight: bold;
  margin-top: ${Spacing.medium};
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus {
    ${buttonHoverStyles};
    outline: none;
  }

  &:active {
    background-color: #b44000;
  }

  @media (max-width: ${Breakpoints.md}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 1.4rem;
  }
`;
