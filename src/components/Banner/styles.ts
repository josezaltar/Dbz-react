import styled from "styled-components";
import bannerImage from "../../assets/images/banner.jpg"; // Importa a imagem diretamente

// Componente Banner estilizado com styled-components
export const BannerContainer = styled.div`
  width: 100%;
  height: 17.5rem; /* Altura ajustada para rem (280px -> 17.5rem) */
  background-image: url(${bannerImage}); /* Usando a imagem importada */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 768px) {
    height: 12.5rem; /* Ajuste a altura para telas menores (200px -> 12.5rem) */
  }

  @media (max-width: 480px) {
    height: 9.375rem; /* Ajuste a altura para telas muito pequenas (150px -> 9.375rem) */
  }
`;

// Para sobrepor um gradiente (para melhorar a legibilidade do conteúdo)
export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Escurece o banner */
  z-index: 1;
`;

// Componente que pode ser usado para conteúdo dentro do banner
export const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: white;
  text-align: center;
  font-size: 1.5rem; /* Ajuste do tamanho da fonte (24px -> 1.5rem) */

  @media (max-width: 768px) {
    font-size: 1.25rem; /* Reduz o tamanho da fonte para telas menores (20px -> 1.25rem) */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Fontes ainda menores para telas pequenas (16px -> 1rem) */
  }
`;
