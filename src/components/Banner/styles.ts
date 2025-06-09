import styled from "styled-components";
import bannerImage from "../../assets/images/banner.jpg";

// Variáveis para facilitar ajustes de design
const BannerHeight = {
  large: "17.5rem",
  medium: "12.5rem",
  small: "9.375rem",
};

const BannerFontSize = {
  large: "1.5rem",
  medium: "1.25rem",
  small: "1rem",
};

// Componente Banner estilizado com styled-components
export const BannerContainer = styled.div`
  width: 100%;
  height: ${BannerHeight.large}; /* Altura do banner */
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media (max-width: 768px) {
    height: ${BannerHeight.medium}; /* Ajuste para telas menores */
  }

  @media (max-width: 480px) {
    height: ${BannerHeight.small}; /* Ajuste para telas pequenas */
  }
`;

// Para sobrepor um gradiente (para melhorar a legibilidade do conteúdo)
export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
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
  font-size: ${BannerFontSize.large}; /* Ajuste do tamanho da fonte */

  @media (max-width: 768px) {
    font-size: ${BannerFontSize.medium}; /* Ajuste para telas menores */
  }

  @media (max-width: 480px) {
    font-size: ${BannerFontSize.small}; /* Ajuste para telas pequenas */
  }
`;
