import React from "react";
import { Container, Title, Section, SectionFinal } from "./styles"; // Importando o container, título e Section
import Comum from "../../components/Skins/Comum"; // Importando o componente Comum
import Raras from "../../components/Skins/Raros"; // Importando o componente Raras
import Epicos from "../../components/Skins/Epicos"; // Importando o componente Epicos
import Lendarios from "../../components/Skins/Lendarias"; // Importando o componente Lendarios

const Personagens: React.FC = () => {
  return (
    <section id="personagens">
      <Container>
        {/* Seções de personagens */}
        <Section>
          <Title>Comuns</Title>
          <Comum /> {/* Exibindo personagens comuns */}
        </Section>

        <Section>
          <Title>Raros</Title>
          <Raras /> {/* Exibindo personagens raros */}
        </Section>

        <Section>
          <Title>Épicos</Title>
          <Epicos /> {/* Exibindo personagens épicos */}
        </Section>

        <SectionFinal>
          <Title>Lendários</Title>
          <Lendarios /> {/* Exibindo personagens lendários */}
        </SectionFinal>
      </Container>
    </section>
  );
};

export default Personagens;
