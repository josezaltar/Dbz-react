import React from "react";
import { personagensData } from "../../data/characters"; // Importando os dados dos personagens
import { Overlay, Container, CloseButton } from "./styles"; // Importando os estilos

interface CharacterDetailProps {
  characterId: number;
  onClose: () => void;
}

const CharacterDetail: React.FC<CharacterDetailProps> = ({
  characterId,
  onClose,
}) => {
  const personagem = personagensData.find((p) => p.id === characterId);

  if (!personagem) {
    return <div>Personagem não encontrado!</div>;
  }

  return (
    <Overlay onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <img src={personagem.image} alt={personagem.name} />
        <div>
          <h2>{personagem.name}</h2>
          <p>{personagem.story}</p>

          {/* Exibindo as Quest, Minions e Boss lado a lado */}
          <h3>Drops e Quest</h3>
          <div className="info-section">
            <div className="info-column">
              <h4>Quest</h4>
              <ul>
                {personagem.quest.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="info-column">
              <h4>Minions</h4>
              <ul>
                {personagem.drops.minions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="info-column">
              <h4>Boss</h4>
              <ul>
                {personagem.drops.boss.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <CloseButton onClick={onClose}>×</CloseButton>
      </Container>
    </Overlay>
  );
};

export default CharacterDetail;
