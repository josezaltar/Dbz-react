import React from "react";
import { Container, DownloadItem, Button, Title } from "./styles"; // Atualização para adicionar novos estilos

const Download: React.FC = () => {
  return (
    <Container>
      <Title>Download</Title>

      <DownloadItem>
        <h3>Cliente Completo - Dragon Ball Z Revolution</h3>
        <p>Sistema: Windows</p>
        <p>Tamanho: 91,3 MB</p>
        <Button
          href="https://mega.nz/file/x4E2xTyC#CXo2dA3Rn9KCAfqnGNfX0eZWzwkTQqXQvBD2taSqd5A"
          target="_blank"
        >
          Baixar Agora
        </Button>
      </DownloadItem>
    </Container>
  );
};

export default Download;
