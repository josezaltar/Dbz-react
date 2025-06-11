import React from "react";
import { Card, PersonagemContainer, CardWrapper } from "../styles";

// Importando as imagens dos personagens épicos
import Broly from "../../../assets/images/personagens/Epicos/Broly.jpeg";
import SuperNamek from "../../../assets/images/personagens/Epicos/SuperNamek.png";
import SuperTules from "../../../assets/images/stage/turles.png";
import Android16 from "../../../assets/images/stage/android16.png";
import Alienigena1 from "../../../assets/images/personagens/Epicos/Alienigena1.jpeg";
import ReiVegetaSSJ from "../../../assets/images/personagens/Epicos/ReiVegetaSSJ.jpg";
import JackieChun from "../../../assets/images/personagens/Epicos/JackieChun.jpg";
import Kamisama from "../../../assets/images/personagens/Epicos/Kamisama.jpg";
import Tamborine from "../../../assets/images/personagens/Epicos/Tamborine.jpg";
import DrWheelo from "../../../assets/images/personagens/Epicos/DrWheelo.jpg";

// Tipagem dos personagens épicos
interface Personagem {
  nome: string;
  requisitos: string[];
  foto: string;
}

// Dados dos personagens épicos com as imagens importadas
const personagensEpicos: Personagem[] = [
  {
    nome: "Broly Traje Raiz",
    requisitos: ["Diamante: 100"],
    foto: Broly,
  },
  {
    nome: "Super Namek",
    requisitos: ["Diamante: 100"],
    foto: SuperNamek,
  },
  {
    nome: "Super Tules",
    requisitos: ["Diamante: 100"],
    foto: SuperTules,
  },
  {
    nome: "Android 16",
    requisitos: ["Diamante: 100"],
    foto: Android16,
  },
  {
    nome: "Alienígena I",
    requisitos: ["Diamante: 100"],
    foto: Alienigena1,
  },
  {
    nome: "Rei Vegeta SSJ",
    requisitos: ["Diamante: 100"],
    foto: ReiVegetaSSJ,
  },
  {
    nome: "Jackie Chun",
    requisitos: ["EXCLUSIVO PASSE: 1"],
    foto: JackieChun,
  },
  {
    nome: "Kamisama",
    requisitos: ["EXCLUSIVO PASSE: 1"],
    foto: Kamisama,
  },
  {
    nome: "Tamborine",
    requisitos: ["EXCLUSIVO EVENTO: 1"],
    foto: Tamborine,
  },
  {
    nome: "Dr. Wheelo",
    requisitos: ["EXCLUSIVO EVENTO: 1"],
    foto: DrWheelo,
  },
];

const Epicos: React.FC = () => {
  return (
    <PersonagemContainer>
      <CardWrapper>
        {personagensEpicos.map(({ nome, requisitos, foto }, index) => (
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

export default Epicos;
