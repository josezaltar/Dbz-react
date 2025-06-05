import styled from "styled-components";
import { Colors, Spacing } from "../../../styles/variables"; // Importando as variáveis

export const PersonagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  background-color: ${Colors.background}; /* Fundo com a cor definida */
  margin-bottom: ${Spacing.large}; /* Ajuste da margem inferior */
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 cards por linha */
  gap: ${Spacing.medium}; /* Espaçamento entre os cards */
  margin-top: ${Spacing.small};
  width: 100%;
  padding: ${Spacing.medium};

  /* Responsividade */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* Ajuste para telas menores */
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr); /* 3 cards por linha */
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards por linha */
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr; /* 1 card por linha */
  }
`;

export const Card = styled.div`
  background-color: ${Colors.cardBackground};
  color: ${Colors.secondary};
  border-radius: 12px;
  padding: ${Spacing.medium};
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease-in-out;
  min-height: 420px; /* Ajustando para uma altura mínima consistente */
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
    margin-bottom: ${Spacing.small};
    font-weight: bold;
    -webkit-text-stroke: 0.4px #000;
    margin-top: 0;
    border-bottom: 1px solid #fff;
  }

  .small-font {
    font-size: 2rem;
    margin-top: 5px;
  }

  h4 {
    color: ${Colors.primary};
    font-size: 1.5rem;
    margin-top: ${Spacing.medium};
    margin-bottom: ${Spacing.small};
    font-weight: 600;
    -webkit-text-stroke: 0.3px #000;
  }

  p {
    font-size: 1rem;
    color: ${Colors.secondary};
    margin-top: ${Spacing.small};
  }

  &:hover {
    background-color: ${Colors.cardHover};
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;
