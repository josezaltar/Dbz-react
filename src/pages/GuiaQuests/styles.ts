import styled from "styled-components";
import { Colors, Spacing, Breakpoints, Shadows } from "../../styles/variables"; // Importando as variáveis

// Estilos Comuns
const textAlignCenter = `
  text-align: center;
`;

const fontSize = {
  title: "5rem",
  subtitle: "3.5rem",
  paragraph: "1.1rem",
};

const padding = `${Spacing.large} ${Spacing.small}`;

export const Container = styled.section`
  padding: ${padding};
  background-color: ${Colors.background};
  color: ${Colors.text};
  border-radius: 10px;
  max-width: 95%;
  margin: ${Spacing.large} auto;
  overflow: hidden;
  box-shadow: ${Shadows.medium};
  ${textAlignCenter};

  @media (max-width: ${Breakpoints.md}) {
    padding: ${Spacing.medium} ${Spacing.small};
  }
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 8vw, ${fontSize.title});
  color: ${Colors.primary};
  margin-bottom: ${Spacing.small};
  -webkit-text-stroke: 0.8px #000;
  ${textAlignCenter};

  @media (max-width: ${Breakpoints.md}) {
    font-size: 3rem;
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: ${fontSize.subtitle};
  color: ${Colors.primary};
  margin-bottom: ${Spacing.medium};
  -webkit-text-stroke: 0.3px #000;
  ${textAlignCenter};

  @media (max-width: ${Breakpoints.md}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  font-size: ${fontSize.paragraph};
  margin-top: ${Spacing.small};
  color: ${Colors.text};
  text-align: center;
  margin-bottom: ${Spacing.small};

  strong {
    color: ${Colors.primary};
  }

  @media (max-width: ${Breakpoints.md}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 1rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${Spacing.small} 25%;
  text-align: left;

  li {
    font-size: ${fontSize.paragraph};
    margin-bottom: ${Spacing.small};
    color: ${Colors.text};

    strong {
      color: ${Colors.primary};
    }
  }

  @media (max-width: ${Breakpoints.md}) {
    margin: ${Spacing.small};
  }
`;
