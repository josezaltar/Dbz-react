import styled from "styled-components";
import { Colors, Spacing, Breakpoints, Shadows } from "../../styles/variables"; // Importando as variáveis

const fontSize = {
  title: "5rem",
  subtitle: "2.3rem",
  paragraph: "1.25rem",
};

const padding = `${Spacing.xsmall} ${Spacing.medium}`;

export const Container = styled.section`
  padding: ${padding};
  text-align: center;
  background-color: ${Colors.background};
  color: ${Colors.text};
  border-radius: 10px;
  max-width: 95%;
  margin: ${Spacing.large} auto;
  overflow: hidden;
  box-shadow: ${Shadows.medium};

  @media (max-width: ${Breakpoints.md}) {
    padding: ${Spacing.large} ${Spacing.small};
  }
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, ${fontSize.title});
  color: ${Colors.primary};
  margin-bottom: ${Spacing.small};
  text-align: center;
  -webkit-text-stroke: 0.8px #000;
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: ${Spacing.medium};
  background-color: #2c3e50;
  border-radius: 10px;
  color: ${Colors.text};
  width: 70%;
  box-shadow: ${Shadows.medium};
  margin: auto;

  @media (max-width: ${Breakpoints.md}) {
    width: 90%;
  }
`;

export const ContentTitle = styled.h2`
  font-size: ${fontSize.subtitle};
  color: ${Colors.primary};
  margin-bottom: ${Spacing.medium};
  -webkit-text-stroke: 0.3px #000;
`;

export const ContentText = styled.p`
  font-size: ${fontSize.paragraph};
  color: ${Colors.text};
  text-align: center;
  line-height: 1.8;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: ${Colors.background};
  border-radius: 10px;
  width: 100%;
  box-shadow: ${Shadows.heavy};
  border: 4px solid ${Colors.primary};
`;

export const ListItem = styled.li<{ selected: boolean }>`
  padding: ${Spacing.small} ${Spacing.medium};
  color: ${Colors.text};
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? Colors.primary : "transparent"};

  &:hover {
    background-color: ${Colors.cardHover};
  }
`;
