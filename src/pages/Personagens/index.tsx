import React from "react";
import { Container } from "./styles"; // Importando o container
import { PersonagemContainer, Card, Title } from "./styles"; // Importa os estilos dos cards

const Personagens: React.FC = () => {
  return (
    <section id="personagens">
      <Container>
        {" "}
        {/* Container centralizado */}
        <Title>Personagens</Title>
        <PersonagemContainer>
          {/* Cards de exemplo */}
          <Card>
            <img src="https://placehold.co/222x250" alt="Goku" />
            <h3>Goku</h3>
            <p>O lendário Saiyajin...</p>
          </Card>
          <Card>
            <img src="https://placehold.co/222x250" alt="Vegeta" />
            <h3>Vegeta</h3>
            <p>O Príncipe dos Saiyajins...</p>
          </Card>
          <Card>
            <img src="https://placehold.co/222x250" alt="Freeza" />
            <h3>Freeza</h3>
            <p>O imperador galáctico...</p>
          </Card>
          <Card>
            <img src="https://placehold.co/222x250" alt="Piccolo" />
            <h3>Piccolo</h3>
            <p>O guerreiro Namekuseijin...</p>
          </Card>
          <Card>
            <img src="https://placehold.co/222x250" alt="Trunks" />
            <h3>Trunks</h3>
            <p>O filho de Vegeta...</p>
          </Card>
        </PersonagemContainer>
      </Container>
    </section>
  );
};

export default Personagens;
