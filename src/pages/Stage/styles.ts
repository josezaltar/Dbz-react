import styled from "styled-components";
import { Breakpoints, Colors, Shadows, Spacing } from "../../styles/variables";

export const Container = styled.section`
  padding: ${Spacing.xLarge} ${Spacing.medium};
  text-align: center;
  background-color: ${Colors.background}; /* Usando a cor de fundo definida em variables.ts */
  color: ${Colors.secondary}; /* Usando a cor de texto definida em variables.ts */
  border-radius: 10px;
  max-width: 95%;
  margin: ${Spacing.large} auto;
  overflow: hidden;
  box-shadow: ${Shadows.heavy};

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    padding: ${Spacing.large} ${Spacing.small};
  }
`;

export const StageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 colunas */
  gap: 20px; /* Espaçamento entre os cards */
  margin-top: 10px;

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas em tablets */
  }

  @media (max-width: ${Breakpoints.mobile}) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* 2 colunas em dispositivos móveis */
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: ${Colors.verde}; /* Usando a cor primária definida em variables.ts */
  margin-bottom: ${Spacing.xsmall};
  text-align: center;
  -webkit-text-stroke: 0.8px #000;

  /* Responsividade */
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 2.5rem;
    margin-bottom: ${Spacing.medium}; /* Ajustando a margem */
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: ${Spacing.small}; /* Ajustando a margem */
  }
`;

export const CharacterCard = styled.div`
  height: 100%; /* Altura do card */
  width: 100%; /* Largura do card */
  padding: 8px;
  background-color: ${Colors.cardHover};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  border-radius: 8px;
  text-align: center;
  box-shadow: ${Shadows.light};

  img {
    width: 100%;
    height: 150px; /* Altura fixa para todas as imagens */
    object-fit: cover; /* A imagem se ajusta sem distorcer */
    border-radius: 8px;
  }

  h3 {
    color: ${Colors.verde};
    font-size: 2.2rem;
    margin-top: ${Spacing.medium};
    margin-bottom: ${Spacing.small};
    font-weight: 600;
    -webkit-text-stroke: 0.5px #000;
  }

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
`;
