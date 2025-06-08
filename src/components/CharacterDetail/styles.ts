import styled from "styled-components";
import { Colors, Shadows } from "../../styles/variables"; // Adapte a variável conforme seu estilo

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Container = styled.div`
  background-color: ${Colors.background};
  display: flex;
  flex-direction: row;
  max-width: 960px;
  width: 80%; /* Ajustando a largura para que o conteúdo fique mais equilibrado */
  border-radius: 8px;
  padding: 16px;
  position: relative;
  color: ${Colors.verde};
  box-shadow: ${Shadows.heavy};
  height: auto; /* Ajuste para altura variável */
  max-height: 85%; /* Limita a altura do container */
  margin-bottom: 0;

  img {
    width: 300px; /* Largura fixada para que a imagem não ocupe muito espaço */
    height: 280px; /* Altura fixada, para que a imagem não distorça */
    border-radius: 8px;
    object-fit: cover; /* As imagens manterão a proporção */
    margin-right: 24px;
  }

  .info-section {
    display: flex; /* Organiza as seções lado a lado */
    justify-content: space-between;
    width: 100%;
  }

  .info-column {
    width: 30%; /* Define a largura de cada coluna */
  }

  ul {
    list-style-type: none; /* Remove os pontos */
    padding-left: 0; /* Remove o espaçamento à esquerda */
    font-size: 12px;
  }

  li {
    color: ${Colors.secondary};
  }

  h2 {
    padding-top: 0;
    margin-top: 0;
    font-size: 38px; /* Ajuste da fonte para ficar mais equilibrado */
    margin-bottom: 0;
    font-weight: 600;
    -webkit-text-stroke: 0.5px #000;
  }

  h3 {
    font-size: 1.7rem; /* Reduzindo a fonte para que fique proporcional */
    font-weight: 600;
    -webkit-text-stroke: 0.5px #000;
    margin-bottom: 0;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    line-height: 1.4;
    color: ${Colors.secondary};
    font-weight: 400;
  }

  strong,
  span {
    color: ${Colors.primary};
  }

  /* Responsividade para telas menores */
  @media (max-width: 1024px) {
    width: 90%; /* Ajusta a largura para tablets */
    img {
      width: 100%; /* Ajusta a largura da imagem para dispositivos móveis */
      height: 230px;
    }
    h2 {
      font-size: 2.5rem; /* Ajuste do tamanho da fonte */
    }
    h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    width: 95%; /* Ajusta a largura para dispositivos móveis */
    padding: 12px; /* Ajusta o padding */

    img {
      margin-right: 0;
      margin-bottom: 16px;
      width: 100%; /* Ajusta a largura da imagem para dispositivos móveis */
      height: 180px;
    }

    h2 {
      font-size: 1.8rem; /* Ajusta o tamanho da fonte para telas pequenas */
    }

    h3 {
      font-size: 1.3rem; /* Ajusta o tamanho da fonte para telas pequenas */
    }

    p {
      font-size: 14px; /* Ajuste no tamanho da fonte para dispositivos móveis */
    }
  }

  @media (max-width: 480px) {
    width: 100%; /* Para telas menores, ajusta para 100% de largura */
    padding: 10px; /* Ajuste de padding para telas muito pequenas */

    img {
      width: 100%; /* Ajusta a largura da imagem para dispositivos móveis */
      height: 160px;
    }

    h2 {
      font-size: 1.5rem; /* Ajusta o tamanho da fonte para telas muito pequenas */
    }

    h3 {
      font-size: 1.2rem; /* Ajusta o tamanho da fonte para telas muito pequenas */
    }

    p {
      font-size: 12px; /* Ajuste no tamanho da fonte para dispositivos móveis muito pequenos */
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: ${Colors.primary};
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
  padding: 0;
`;
