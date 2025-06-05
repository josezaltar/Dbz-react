import React from "react";
import { PersonagemContainer, Card } from "./styles"; // Importa os estilos

const Personagens: React.FC = () => {
  return (
    <section id="personagens">
      <h1>Personagens</h1>
      <PersonagemContainer>
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
      </PersonagemContainer>
    </section>
  );
};

export default Personagens;
