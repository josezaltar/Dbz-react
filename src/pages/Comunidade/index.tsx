import React from "react";
import { Container, Title, List } from "./styles"; // Importa os estilos

const Comunidade: React.FC = () => {
  return (
    <Container>
      <Title>Nossa Comunidade</Title>
      <p>
        Conecte-se com outros guerreiros, discuta estratégias, reporte bugs e
        fique por dentro de todas as novidades do Dragon Ball Z Revolution!
      </p>
      <List>
        <li>
          <a
            href="https://discord.com/invite/JxmKgAvpxr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nosso Discord Oficial
          </a>
        </li>
        <li>
          <a
            href="https://chat.whatsapp.com/Dq9jto8IhTTAQ3o60roDaW"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grupo do WhatsApp
          </a>
        </li>
      </List>
    </Container>
  );
};

export default Comunidade;
