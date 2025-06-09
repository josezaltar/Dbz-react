import styled from "styled-components";
import { Colors, Spacing, Breakpoints } from "../../styles/variables";

// Unificando as variáveis de estilo
const fontSize = {
  default: "1rem",
  md: "0.95rem",
  sm: "0.85rem",
};

const padding = `${Spacing.medium} 0`;
const paddingSmall = `${Spacing.small} 0`;

export const Container = styled.footer`
  background-color: ${Colors.background};
  padding: ${padding};
  color: ${Colors.text};
  text-align: center;
  font-size: ${fontSize.default};

  @media (max-width: ${Breakpoints.md}) {
    padding: ${paddingSmall};
    font-size: ${fontSize.md};
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: ${fontSize.sm};
    padding: ${paddingSmall};
  }
`;

export const Text = styled.div`
  font-size: ${fontSize.default};
  margin-top: ${Spacing.small};

  p {
    margin-bottom: ${Spacing.small};
  }

  @media (max-width: ${Breakpoints.md}) {
    font-size: ${fontSize.md};
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: ${fontSize.sm};
    margin-top: ${Spacing.xsmall};
  }
`;
