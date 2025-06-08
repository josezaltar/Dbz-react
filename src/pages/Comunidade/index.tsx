import React from "react";
import { Container, Title, SubTitle, Text, List } from "./styles"; // Importa os estilos
import discordIcon from "../../assets/images/icons/discord.png"; // Importando o ícone do Discord
import wppIcon from "../../assets/images/icons/wpp.png"; // Importando o ícone do WhatsApp
import instagramIcon from "../../assets/images/icons/instagram.png"; // Importando o ícone do Instagram

const Comunidade: React.FC = () => {
  return (
    <Container>
      <Title>Nossa Comunidade</Title>
      <Text>
        Conecte-se com outros guerreiros, discuta estratégias, reporte bugs e
        fique por dentro de todas as novidades do DBZ Revolution!
      </Text>

      <SubTitle>Participe agora</SubTitle>
      <List>
        <li>
          <a
            href="https://discord.com/invite/JxmKgAvpxr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discordIcon} alt="Discord" /> Nosso Discord Oficial
          </a>
        </li>
        <li>
          <a
            href="https://chat.whatsapp.com/Dq9jto8IhTTAQ3o60roDaW"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wppIcon} alt="WhatsApp" /> Grupo do WhatsApp
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/dbz.revolution/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" /> Siga nosso Instagram
          </a>
        </li>
      </List>
    </Container>
  );
};

export default Comunidade;
