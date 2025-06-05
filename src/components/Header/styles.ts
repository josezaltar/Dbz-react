import styled from "styled-components";
import { Link } from "react-router-dom"; // Importa o Link

export const Container = styled.header`
  background-color: #1a252f;
  padding: 10px 0;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const NavItem = styled.li`
  margin: 0 15px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #f0f0f0;
  font-size: 28px;
  font-family: "SaiyanSans", Arial, sans-serif;

  &:hover,
  &:focus {
    color: #ff6600; // Cor primária
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;
