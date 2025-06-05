import React from "react";
import { Container, Text } from "./styles"; // Importa os estilos

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>
        <p>
          Dragon Ball Z Revolution &copy; 2025 - Desenvolvido por Jose Zaltar.
        </p>
        <p>
          Dragon Ball Z e todos os personagens relacionados são marcas
          registradas de Akira Toriyama...
        </p>
      </Text>
    </Container>
  );
};

export default Footer;
