import React from "react";
import { Container, Title, Text } from "./styles"; // Estilos da página Home

const Home: React.FC = () => {
  return (
    <div>
      <Container>
        <Title>Bem-vindo ao Dragon Ball Z Revolution!</Title>
        <Text>
          Prepare-se para a jornada de sua vida!{" "}
          <strong>Dragon Ball Z Revolution</strong> é um MMORPG 2D desenvolvido
          por fãs para fãs, inspirado no incrível universo de Dragon Ball Z.
          Entre no mundo onde você pode treinar ao lado de seus heróis e vilões
          favoritos, explorar as icônicas sagas de Dragon Ball, e lutar para se
          tornar o guerreiro mais forte do universo!
        </Text>

        <Text>
          <strong>Viva as Sagas:</strong> Reviva momentos épicos das sagas mais
          emocionantes, como a <strong>Saga Saiyajin</strong> e a{" "}
          <strong>Saga Freeza</strong>. Sinta a adrenalina de enfrentar inimigos
          poderosos e desafiar seus limites.
        </Text>

        <Text>
          <strong>Escolha seu Caminho:</strong> Seja um mestre das artes
          marciais, um especialista em <strong>Ki</strong>, ou um guerreiro com
          transformações devastadoras. A personalização do seu personagem é
          ilimitada!
        </Text>

        <Text>
          <strong>Combates Dinâmicos:</strong> Lute em tempo real com jogadores
          de todo o mundo e mostre suas habilidades. Use combos, esquivas e
          ataques poderosos para sair vitorioso!
        </Text>

        <Text>
          <strong>Transformações Icônicas:</strong> Desbloqueie e ative as
          famosas <strong>transformações</strong> do universo DBZ, como o{" "}
          <strong>Super Saiyajin</strong> e <strong>Super Saiyajin Blue</strong>
          , para aumentar seus poderes.
        </Text>

        <Text>
          <strong>Missões e Eventos:</strong> Participe de eventos épicos,
          complete missões desafiadoras e ganhe recompensas exclusivas que vão
          te ajudar a se tornar o maior guerreiro!
        </Text>

        <Text>
          Junte-se à comunidade de <strong>Dragon Ball Z Revolution</strong> e
          mostre a todos o verdadeiro significado de ser um{" "}
          <strong>Guerreiro Z</strong>!
        </Text>
      </Container>
    </div>
  );
};

export default Home;
