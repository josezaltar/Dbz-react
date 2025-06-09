import styled from "styled-components";
import { Colors, Breakpoints, Fonts } from "../../styles/variables";
import { Link } from "react-router-dom";

// Tipagem para propriedades
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

export const Container = styled.header<ContainerProps>`
  background-color: ${Colors.background};
  padding: 1rem;
  font-family: ${Fonts.body};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 100%;
  transition: background-color 0.3s ease;

  ${({ isOpen }) =>
    isOpen &&
    `background-color: rgba(0, 0, 0, 0.7);`} /* Fundo escuro quando aberto */

  @media (max-width: ${Breakpoints.md}) {
    justify-content: space-between;
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
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: 0.3rem solid ${Colors.primary};
  border-radius: 0.8rem;
  cursor: pointer;
  z-index: 10;
  padding: 0.8rem;
  color: ${Colors.primary};
  font-family: ${Fonts.heading};
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  -webkit-text-stroke: 0.03125rem #000;

  @media (max-width: ${Breakpoints.md}) {
    display: flex;
    transform: ${({ isOpen }) => (isOpen ? "translateX(-100%)" : "none")};
    transition: transform 0.3s ease;
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
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0;
  background-color: ${Colors.background};

  @media (max-width: ${Breakpoints.md}) {
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding: 15px 10px;
    border: 5px solid ${Colors.primary};
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const NavItem = styled.li`
  margin: 0 5px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  border: 0.3rem solid ${Colors.primary};

  @media (max-width: ${Breakpoints.md}) {
    margin: 8px 0;
    border: none;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.primary};
  font-size: 2rem;
  font-family: ${Fonts.heading};
  -webkit-text-stroke: 0.03125rem #000;
  padding: 0.8rem;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.text};
    border-color: ${Colors.text};
    width: 100%;
    height: 100%;
    -webkit-text-stroke: 0.07rem #000;
  }

  @media (max-width: ${Breakpoints.md}) {
    font-size: 1.5rem;
    padding: 1rem;
  }

  @media (max-width: ${Breakpoints.sm}) {
    font-size: 1.2rem;
  }
`;
