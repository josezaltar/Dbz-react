import styled from "styled-components";
import {
  Colors,
  Spacing,
  Breakpoints,
  Fonts,
  Shadows,
} from "../../styles/variables";

// Estilos Comuns
const textAlignCenter = `
  text-align: center;
`;

const fontSize = {
  title: "3rem",
  subtitle: "2rem",
  text: "1.25rem",
  listItem: "1.1rem",
};

export const Container = styled.section`
  padding: ${Spacing.small} ${Spacing.small};
  background-color: ${Colors.background};
  color: ${Colors.text};
  border-radius: 10px;
  max-width: 95%;
  margin: ${Spacing.large} auto;
  overflow: hidden;
  box-shadow: ${Shadows.heavy};
  ${textAlignCenter};

  /* Responsividade */
  @media (max-width: ${Breakpoints.md}) {
    padding: ${Spacing.medium} ${Spacing.small};
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: ${Colors.primary};
  margin-bottom: ${Spacing.small};
  font-weight: bold;
  font-family: ${Fonts.heading};
  -webkit-text-stroke: 0.8px #000;
  ${textAlignCenter};

  /* Responsividade */
  @media (max-width: ${Breakpoints.md}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2.5rem;
  color: ${Colors.primary};
  margin-bottom: ${Spacing.xsmall};
  -webkit-text-stroke: 0.8px #000;
  ${textAlignCenter};
`;

export const Text = styled.p`
  font-size: ${fontSize.text};
  margin-top: ${Spacing.small};
  margin-bottom: ${Spacing.medium};
  color: ${Colors.text};
  ${textAlignCenter};

  strong {
    color: ${Colors.primary};
  }

  /* Responsividade */
  @media (max-width: ${Breakpoints.md}) {
    font-size: 1.1rem;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: ${Spacing.small} ${Spacing.medium};
  ${textAlignCenter};

  li {
    font-size: ${fontSize.listItem};
    margin-bottom: ${Spacing.small};
    color: ${Colors.text};

    strong {
      color: ${Colors.primary};
    }

    a {
      color: ${Colors.text};
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
`;
