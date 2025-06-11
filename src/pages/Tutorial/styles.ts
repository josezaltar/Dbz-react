import styled from "styled-components";
import {
  Colors,
  Spacing,
  Breakpoints,
  Shadows,
  Fonts,
} from "../../styles/variables";

interface HamburgerIconProps {
  isOpen: boolean;
}

interface MenuProps {
  isOpen: boolean;
}

interface ContainerProps {
  isOpen: boolean;
}

const mobileMenuStyle = `
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 4;
  visibility: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "visible" : "hidden"};
  opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "1" : "0")};
  transition: all 0.3s ease;
`;

const commonMenuStyles = `
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  width: 100%;
`;

export const Container = styled.section<ContainerProps>`
  padding: ${Spacing.small};
  text-align: center;
  background-color: ${Colors.background};
  color: ${Colors.text};
  border-radius: 10px;
  max-width: 95%;
  margin: ${Spacing.xsmall} auto;
  overflow: hidden;
  box-shadow: ${Shadows.medium};

  ${({ isOpen }) =>
    isOpen &&
    `background-color: rgba(0, 0, 0, 0.7);`} /* Fundo escuro quando aberto */
      display: flex; /* Usando flexbox para alinhar os itens lado a lado */
  flex-direction: row; /* Lado a lado no desktop */
  @media (max-width: ${Breakpoints.md}) {
    padding: ${Spacing.large} ${Spacing.small};
    display: block;
  }
`;

export const Overlay = styled.div<ContainerProps>`
  ${mobileMenuStyle};

  @media (min-width: ${Breakpoints.md}) {
    visibility: hidden;
    opacity: 0;
  }
`;

export const HamburgerIcon = styled.div<HamburgerIconProps>`
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 0.3rem solid ${Colors.primary};
  border-radius: 0.8rem;
  cursor: pointer;
  padding: 0.8rem;
  color: ${Colors.primary};
  font-family: ${Fonts.body};
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  -webkit-text-stroke: 0.03125rem #000;
  margin-bottom: ${Spacing.large};

  @media (max-width: ${Breakpoints.md}) {
    display: flex;
    transform: ${({ isOpen }) => (isOpen ? "translateX(-100%)" : "none")};
    transition: transform 0.3s ease;
    width: 100%;
  }
`;

export const Menu = styled.div<MenuProps>`
  ${commonMenuStyles};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  background-color: ${({ isOpen }) =>
    isOpen ? "transparent" : "rgba(0, 0, 0, 0.7)"};

  @media (max-width: ${Breakpoints.md}) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${({ isOpen }) =>
      isOpen ? "rgba(0, 0, 0, 0.7)" : "transparent"};
    flex-direction: column;
    width: 100%;
    height: 100vh;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    padding: 1rem;
    z-index: 5;
  }

  @media (min-width: ${Breakpoints.md}) {
    opacity: 1;
    visibility: visible;
    position: static;
    flex-direction: row;
    height: auto;
    transform: none;
    background-color: ${Colors.background};
    width: 220px;
  }
`;

export const List = styled.ul<{ isOpen: boolean }>`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: ${Colors.background};
  border-radius: 10px;
  width: 200px; /* Diminuir a largura do menu */
  box-shadow: ${Shadows.heavy};
  border: 4px solid ${Colors.primary};
  display: ${(props) => (props.isOpen ? "block" : "none")};

  @media (min-width: ${Breakpoints.md}) {
    display: block;
    width: 200px; /* Garantir a largura pequena no desktop */
  }
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

export const Img = styled.img`
  width: 50%;
  height: auto;
  margin-top: 20px;
  color: white;

  @media (max-width: ${Breakpoints.md}) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const Content = styled.div`
  flex-grow: 1;
  padding: ${Spacing.medium};
  background-color: #2c3e50;
  border-radius: 10px;
  color: ${Colors.text};
  margin-left: 20px; /* Deixa o conteúdo afastado do menu */
  box-shadow: ${Shadows.medium};

  @media (max-width: ${Breakpoints.md}) {
    margin-left: 0;
    width: 100%;
  }
`;
export const ContentTitle = styled.h2`
  font-size: 36px;
  color: ${Colors.primary};
  margin-bottom: ${Spacing.medium};
  -webkit-text-stroke: 0.3px #000;

  @media (max-width: ${Breakpoints.md}) {
    font-size: 20px;
  }
`;
export const ContentText = styled.p`
  font-size: 20px;
  color: ${Colors.text};
  text-align: center;
  line-height: 1.8;

  @media (max-width: ${Breakpoints.md}) {
    font-size: 1rem;
    padding: 0 10px;
  }
`;
export const Title = styled.h1`
  font-size: 5rem;
  color: ${Colors.primary}; /* Usando a cor primária definida em variables.ts */
  margin-bottom: ${Spacing.xsmall};
  text-align: center;
  -webkit-text-stroke: 0.8px #000;

  /* Responsividade */
  @media (max-width: ${Breakpoints.md}) {
    font-size: 2.5rem;
    margin-bottom: ${Spacing.medium}; /* Ajustando a margem */
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 2rem;
    margin-bottom: ${Spacing.small}; /* Ajustando a margem */
  }
`;
