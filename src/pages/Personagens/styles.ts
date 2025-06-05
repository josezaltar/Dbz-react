import styled from "styled-components";

export const PersonagemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

export const Card = styled.div`
  width: calc(20% - 20px); // 5 cards por linha
  background-color: #343a40;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    max-width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 2rem;
    color: #ff6600;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  // Media Queries para dispositivos de diferentes tamanhos de tela
  @media (max-width: 1200px) {
    width: calc(25% - 20px); // 4 cards por linha em telas médias
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px); // 2 cards por linha em telas pequenas
  }

  @media (max-width: 480px) {
    width: 100%; // 1 card por linha em celulares
  }
`;
