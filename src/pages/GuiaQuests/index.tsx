import React from "react";
import { Container, Title, SubTitle, Text, List } from "./styles"; // Importa os estilos

const GuiaQuests: React.FC = () => {
  return (
    <Container>
      <Title>Guia de Quests</Title>
      <Text>
        Embarque em missões épicas, ajude personagens icônicos e desvende os
        mistérios do universo Dragon Ball Z Revolution! As quests são essenciais
        para sua progressão, oferecendo experiência, itens e desbloqueando novas
        áreas e sagas.
      </Text>

      <SubTitle>Tipos de Quests</SubTitle>
      <List>
        <li>
          <strong>Quests Principais (Sagas):</strong> Siga a história do jogo,
          revivendo momentos cruciais das sagas de Dragon Ball Z.
        </li>
        <li>
          <strong>Quests Secundárias:</strong> Missões opcionais oferecidas por
          diversos NPCs pelo mundo, geralmente com recompensas únicas.
        </li>
        <li>
          <strong>Quests Diárias/Repetíveis:</strong> Desafios que você pode
          completar regularmente para obter recompensas contínuas.
        </li>
        <li>
          <strong>Quests de Caça:</strong> Elimine um certo número de inimigos
          específicos.
        </li>
        <li>
          <strong>Quests de Coleta:</strong> Encontre e entregue itens
          específicos para NPCs.
        </li>
      </List>

      <SubTitle>Começando sua Jornada</SubTitle>
      <Text>
        Fique atento aos NPCs com um ponto de exclamação (!) sobre suas cabeças
        – eles têm missões para você! As primeiras quests geralmente são
        introdutórias, ensinando as mecânicas básicas do jogo e guiando você
        pelas primeiras áreas.
      </Text>
      <Text>
        Não hesite em explorar e conversar com todos os personagens que
        encontrar. Muitas aventuras esperam por você!
      </Text>
    </Container>
  );
};

export default GuiaQuests;
