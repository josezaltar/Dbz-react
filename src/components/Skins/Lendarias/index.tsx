import React from "react";
import { Card, PersonagemContainer, CardWrapper } from "./styles";

// Importando as imagens dos personagens lendários
import MarronBikini from "../../../assets/images/personagens/Lendarios/MarronBikini.png";
import Alienigena2 from "../../../assets/images/personagens/Lendarios/Alienigena2.jpg";
import Fantasminha from "../../../assets/images/personagens/Lendarios/Fantasminha.jpg";
import NamekianGod from "../../../assets/images/personagens/Lendarios/NamekianGod.png";
import BrolySSJ4 from "../../../assets/images/personagens/Lendarios/BrolySSJ4.jpg";
import TurlesCaped from "../../../assets/images/personagens/Lendarios/TurlesCaped.png";
import Super13 from "../../../assets/images/personagens/Lendarios/Super13.jpg";

// Tipagem dos personagens lendários
interface Personagem {
  nome: string;
  requisitos: string[];
  foto: string; // Propriedade para foto
}

// Dados dos personagens lendários com as imagens importadas
const personagensLendarios: Personagem[] = [
  {
    nome: "Marron Bikini",
    requisitos: ["Diamante: 150"],
    foto: MarronBikini,
  },
  {
    nome: "Alienígena II",
    requisitos: ["Diamante: 150"],
    foto: Alienigena2,
  },
  {
    nome: "Fantasminha",
    requisitos: ["Diamante: 150"],
    foto: Fantasminha,
  },
  {
    nome: "Namekian God",
    requisitos: ["Diamante: 150"],
    foto: NamekianGod,
  },
  {
    nome: "Broly SSJ4",
    requisitos: ["EXCLUSIVO PACOTES: 1"],
    foto: BrolySSJ4,
  },
  {
    nome: "Turles Caped",
    requisitos: ["EXCLUSIVO PASSE: 1"],
    foto: TurlesCaped,
  },
  {
    nome: "Super 13",
    requisitos: ["EXCLUSIVO PACOTES: 1"],
    foto: Super13,
  },
];

const Lendarios: React.FC = () => {
  return (
    <PersonagemContainer>
      <CardWrapper>
        {personagensLendarios.map(({ nome, requisitos, foto }, index) => (
          <Card key={index}>
            {/* Usando a foto específica de cada personagem */}
            <img src={foto} alt={nome} />
            <h3>{nome}</h3>
            <h4>Requisitos</h4>
            <div>
              {requisitos.map((requisito, idx) => (
                <p key={idx}>{requisito}</p>
              ))}
            </div>
          </Card>
        ))}
      </CardWrapper>
    </PersonagemContainer>
  );
};

export default Lendarios;
