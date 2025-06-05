import styled from "styled-components";
import bannerImage from "../../assets/images/banner.jpg"; // Importa a imagem diretamente

// Componente Banner estilizado com styled-components
export const BannerContainer = styled.div`
  width: 100%;
  height: 280px; /* Defina a altura que preferir */
  background-image: url(${bannerImage}); /* Usando a imagem importada */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;
