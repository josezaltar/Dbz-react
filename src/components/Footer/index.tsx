import React from "react";
import { Container, Text } from "./styles"; // Importa os estilos

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>
        <p>DBZ Revolution &copy; 2025 - Desenvolvido por Jose Zaltar.</p>
        <p>
          Este site é um projeto de fã. DB, DBZ, DBGT e DBS são propriedades de
          Akira Toriyama, Toei Animation, Shueisha e Funimation. Todos os
          direitos reservados aos seus respectivos criadores.
        </p>
      </Text>
    </Container>
  );
};

export default Footer;
