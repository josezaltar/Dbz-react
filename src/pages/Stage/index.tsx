// src/pages/Stage/index.tsx
import React, { useState } from "react";
import { personagensData } from "../../data/characters"; // Importando os dados dos personagens
import { StageContainer, CharacterCard, Container, Title } from "./styles"; // Importando os estilos

import CharacterDetail from "../../components/CharacterDetail"; // Componente Modal

const Stage: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null
  );

  // Função para exibir o modal
  const handleCharacterClick = (id: number) => {
    setSelectedCharacter(id);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <Container>
      <Title>Stage</Title>
      <StageContainer>
        {personagensData.map((personagem) => (
          <CharacterCard
            key={personagem.id}
            onClick={() => handleCharacterClick(personagem.id)} // Ao clicar, mostra o modal
          >
            <img src={personagem.image} alt={personagem.name} />
            <h3>{personagem.name}</h3>
          </CharacterCard>
        ))}
      </StageContainer>

      {/* Mostrar Modal com as informações do personagem */}
      {selectedCharacter !== null && (
        <CharacterDetail
          characterId={selectedCharacter}
          onClose={handleCloseModal}
        />
      )}
    </Container>
  );
};

export default Stage;
