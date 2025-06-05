import React from "react";
import { Container, Title, VideoContainer } from "./styles"; // Importa os estilos

const Galeria: React.FC = () => {
  return (
    <Container>
      <Title>Galeria de Mídia</Title>
      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/62NZDF6df3Y?si=lxsKu-mWr2wUyZ_J"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </VideoContainer>
    </Container>
  );
};

export default Galeria;
