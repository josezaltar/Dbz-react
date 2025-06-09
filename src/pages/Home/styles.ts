import styled from "styled-components";
import { Colors, Spacing, Breakpoints } from "../../styles/variables"; // Importando as variáveis

// Estilos Comuns
const textAlignCenter = `
  text-align: center;
`;

const fontSize = {
  title: "6rem",
  subtitle: "1.75rem",
  paragraph: "1.25rem",
};

const padding = `${Spacing.medium} ${Spacing.medium}`;

export const Container = styled.section`
  padding: ${padding};
  text-align: left;
  background-color: ${Colors.background};
  color: ${Colors.text};
  border-radius: 10px;
  box-shadow: 0 4px 15px rgb(255, 255, 255);
  max-width: 100%;
  margin: ${Spacing.large} ${Spacing.medium};
  overflow-y: auto;
  line-height: 1.8;
  min-height: auto;

  @media (max-width: ${Breakpoints.md}) {
    padding: ${Spacing.medium} ${Spacing.small};
    margin: ${Spacing.medium} ${Spacing.medium};
  }

  @media (max-width: ${Breakpoints.sm}) {
    padding: ${Spacing.small} ${Spacing.xsmall};
  }
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 10vw, ${fontSize.title});
  color: ${Colors.primary};
  margin-bottom: ${Spacing.small};
  ${textAlignCenter};
  -webkit-text-stroke: 0.4px #000;

  @media (max-width: ${Breakpoints.md}) {
    font-size: clamp(2.5rem, 6vw, 4rem);
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: clamp(2rem, 5vw, 3rem);
  }
`;

export const Text = styled.p`
  font-size: clamp(1rem, 2.5vw, ${fontSize.paragraph});
  margin: ${Spacing.small} 0;
  color: ${Colors.text};
  text-align: justify;

  strong {
    color: ${Colors.primary};
  }

  @media (max-width: ${Breakpoints.md}) {
    font-size: 1.1rem;
    text-align: left;
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 1rem;
    margin-top: ${Spacing.xsmall};
  }
`;

export const SubTitle = styled.h2`
  font-size: clamp(1.25rem, 2.5vw, ${fontSize.subtitle});
  color: ${Colors.primary};
  margin-bottom: ${Spacing.medium};
  text-align: left;

  @media (max-width: ${Breakpoints.md}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 1.25rem;
  }
`;
