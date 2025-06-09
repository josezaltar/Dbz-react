import styled from "styled-components";
import { Colors, Spacing, Breakpoints } from "../../styles/variables";

export const PersonagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background-color: ${Colors.background};
  margin-bottom: ${Spacing.large};
`;

// CardWrapper: Componente para organizar cards responsivos
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${Spacing.medium};
  margin-top: ${Spacing.small};
  width: 100%;
  padding: ${Spacing.medium};

  @media (max-width: ${Breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${Breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${Breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }

  &:last-child {
    grid-column: span 4;
    justify-self: center;
  }
`;

// Card: Componente para o conteúdo do card
export const Card = styled.div`
  background-color: ${Colors.cardHover};
  color: ${Colors.text};
  border-radius: 12px;
  padding: ${Spacing.medium};
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease-in-out;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: ${Spacing.medium};
  }

  h3 {
    color: ${Colors.primary};
    font-size: 2.2rem;
    margin-bottom: 0;
    font-weight: bold;
    -webkit-text-stroke: 0.7px #000;
    margin-top: 0;
    border-bottom: 1px solid #fff;
  }

  .small-font {
    font-size: 2rem;
    margin-top: 5px;
  }

  h4 {
    color: ${Colors.primary};
    font-size: 2rem;
    margin-top: ${Spacing.medium};
    margin-bottom: ${Spacing.small};
    font-weight: 600;
    -webkit-text-stroke: 0.5px #000;
  }

  p {
    font-size: 1rem;
    color: ${Colors.text};
    margin-top: ${Spacing.small};
  }

  &:hover {
    background-color: ${Colors.cardHover};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;
