import styled from "styled-components";
import { Colors, Spacing, Breakpoints, Shadows } from "../../styles/variables"; // Importando as variáveis

// Container geral para centralizar o conteúdo
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

export const Title = styled.h1`
  font-size: 5rem;
  color: ${Colors.primary}; /* Usando a cor primária definida em variables.ts */
  margin-bottom: ${Spacing.xLarge};
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

export const Section = styled.section`
  margin-bottom: ${Spacing.large}; /* Adicionando espaço entre as seções */
  padding: ${Spacing.small} 0;
  box-shadow: ${Shadows.light};

  /* Opcional: Adicionar uma linha entre as seções */
  border-bottom: 1px solid ${Colors.secondary};

  & > h2 {
    margin-bottom: ${Spacing.small};
    color: ${Colors.primary};
    font-size: 2rem;
    text-align: center;
  }
`;

export const PersonagemContainer = styled.div`
  display: grid; /* Usando grid para alinhar os cards */
  grid-template-columns: repeat(5, 1fr); /* 5 cards por linha */
  gap: ${Spacing.medium}; /* Espaçamento entre os cards */
  margin-top: ${Spacing.large};

  @media (max-width: ${Breakpoints.desktop}) {
    grid-template-columns: repeat(
      4,
      1fr
    ); /* 4 cards por linha em telas médias */
  }

  @media (max-width: ${Breakpoints.tablet}) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* 3 cards por linha em telas pequenas */
  }

  @media (max-width: ${Breakpoints.mobile}) {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* 2 cards por linha em telas muito pequenas */
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr; /* 1 card por linha em telas super pequenas */
  }
`;

export const Card = styled.div`
  background-color: ${Colors.cardBackground}; /* Cor do card agora mais clara e harmônica */
  color: ${Colors.secondary};
  border-radius: 12px; /* Bordas mais arredondadas */
  padding: ${Spacing.medium};
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1); /* Sombra mais suave para o card */
  text-align: center;
  transition: all 0.3s ease-in-out; /* Transição suave no hover */

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: ${Spacing.medium};
  }

  h3 {
    color: ${Colors.primary};
    font-size: 1.25rem;
    margin-bottom: ${Spacing.small};
    font-weight: bold;
    -webkit-text-stroke: 1px #000; /* Contraste maior para o texto */
  }

  p {
    font-size: 1rem;
    color: ${Colors.secondary};
    margin-top: ${Spacing.small};
  }

  &:hover {
    background-color: ${Colors.cardHover}; /* Alteração da cor de fundo no hover */
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); /* Aumento da sombra no hover */
    transform: translateY(-5px); /* Efeito de elevação suave no hover */
  }
`;
