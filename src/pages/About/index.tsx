import React from "react";
import { Container, Text } from "./styles"; // Importa os estilos

const About: React.FC = () => {
  return (
    <Container>
      <h1>Sobre Dragon Ball Z Revolution</h1>
      <Text>
        <p>Dragon Ball Z Revolution é um MMORPG 2D...</p>
        <p>Prepare-se para combates intensos e em tempo real...</p>
      </Text>
    </Container>
  );
};

export default About;
