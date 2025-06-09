import React from "react";
import { Card, PersonagemContainer, CardWrapper } from "../styles";

// Importando as imagens dos personagens raros
import Trunks1 from "../../../assets/images/personagens/Raros/Trunks1.jpg";
import Trunks2 from "../../../assets/images/personagens/Raros/Trunks2.jpg";
import CellJr from "../../../assets/images/personagens/Raros/CellJr.png";
import MechaFreeza from "../../../assets/images/personagens/Raros/MechaFreeza.jpg";
import Bulma from "../../../assets/images/personagens/Raros/Bulma.jpg";
import Kuririn from "../../../assets/images/personagens/Raros/Kuririn.jpg";
import ReiVegeta from "../../../assets/images/personagens/Raros/ReiVegeta.png";
import ReiCold from "../../../assets/images/personagens/Raros/ReiCold.jpg";
import GinyuGoku from "../../../assets/images/personagens/Raros/GinyuGoku.jpg";

// Tipagem dos personagens raros
interface Personagem {
  nome: string;
  requisitos: string[];
  foto: string; // Propriedade para foto
  specialClass?: boolean; // Propriedade especial para customização de classe
}

// Dados dos personagens raros com as imagens importadas
const personagensRaros: Personagem[] = [
  {
    nome: "Trunks Fut. I Ssj",
    requisitos: ["History Points: 250", "Green Orb: 1000", "Zeni: 400.000"],
    foto: Trunks1,
  },
  {
    nome: "Trunks Fut. II Ssj",
    requisitos: ["History Points: 250", "Green Orb: 1000", "Zeni: 400.000"],
    foto: Trunks2,
  },
  {
    nome: "Cell Jr",
    requisitos: ["History Points: 250", "Green Orb: 1000", "Zeni: 400.000"],
    foto: CellJr,
  },
  {
    nome: "Mecha Freeza",
    requisitos: ["History Points: 250", "Green Orb: 1000", "Zeni: 400.000"],
    foto: MechaFreeza,
  },
  {
    nome: "Bulma Coelhinha",
    requisitos: ["History Points: 250", "Green Orb: 1000", "Zeni: 400.000"],
    foto: Bulma,
  },
  {
    nome: "Kuririn Traje Alternativo II",
    requisitos: ["History Points: 250", "Green Orb: 1000", "Zeni: 400.000"],
    foto: Kuririn,
    specialClass: true,
  },
  {
    nome: "Rei Vegeta (sem capa)",
    requisitos: ["History Points: 250", "Green Orb: 1000", "Zeni: 400.000"],
    foto: ReiVegeta,
    specialClass: true,
  },
  {
    nome: "Rei Cold",
    requisitos: ["History Points: 250", "Green Orb: 1000", "Zeni: 400.000"],
    foto: ReiCold,
  },
  {
    nome: "Ginyu Goku",
    requisitos: ["EXCLUSIVO PASSE: 1"],
    foto: GinyuGoku,
  },
];

const Raras: React.FC = () => {
  return (
    <PersonagemContainer>
      <CardWrapper>
        {personagensRaros.map(
          ({ nome, requisitos, specialClass, foto }, index) => (
            <Card key={index}>
              <img src={foto} alt={nome} />
              <h3 className={specialClass ? "small-font" : ""}>{nome}</h3>
              <h4>Requisitos</h4>
              <div>
                {requisitos.map((requisito, idx) => (
                  <p key={idx}>{requisito}</p>
                ))}
              </div>
            </Card>
          )
        )}
      </CardWrapper>
    </PersonagemContainer>
  );
};

export default Raras;
