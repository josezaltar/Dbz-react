import React from "react";
import { Container, DownloadItem, Button } from "./styles"; // Importa os estilos

const Download: React.FC = () => {
  return (
    <Container>
      <h1>Downloads</h1>
      <DownloadItem>
        <h3>Cliente Completo - Dragon Ball Z Revolution</h3>
        <p>Sistema: Windows</p>
        <p>Tamanho: 500 MB</p>
        <Button href="https://mega.nz/file/x4E2xTyC#CXo2dA3Rn9KCAfqnGNfX0eZWzwkTQqXQvBD2taSqd5A">
          Baixar Agora
        </Button>
        <p className="download-info">
          Notas da versão: Inclui a Saga Saiyajin e o início da Saga Freeza.
          Personagens jogáveis: Goku, Vegeta, Piccolo.
        </p>
      </DownloadItem>
    </Container>
  );
};

export default Download;
