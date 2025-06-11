import React from "react";
import { Card, PersonagemContainer, CardWrapper } from "../styles";

import Goku from "../../../assets/images/personagens/Comum/Goku.jpg";
import Piccolo from "../../../assets/images/personagens/Comum/piccolo.png";
import Trunks1 from "../../../assets/images/personagens/Comum/trunks1.jpeg";
import Trunks2 from "../../../assets/images/personagens/Comum/trunks2.jpeg";
import Freeza from "../../../assets/images/stage/freeza1.jpg";
import Dende from "../../../assets/images/personagens/Comum/dende.png";
import Tenshinhan from "../../../assets/images/personagens/Comum/Tenshinhan.jpeg";
import Kuririn from "../../../assets/images/personagens/Comum/kuririn1.jpg";
import Gurdo from "../../../assets/images/stage/guldo.jpg";
import Recoome from "../../../assets/images/stage/recoome.png";
import Jeice from "../../../assets/images/stage/jeice.png";
import Burter from "../../../assets/images/stage/burter.png";
import Ginyu from "../../../assets/images/stage/ginyu.jpg";

// Dados dos personagens comuns
const personagens = [
  {
    nome: "Goku Kaioken",
    requisitos: ["History Points: 100", "Green Orb: 500", "Zeni: 200.000"],
    foto: Goku, // Foto de placeholder
  },
  {
    nome: "Piccolo Traje Rasgado",
    requisitos: ["History Points: 100", "Green Orb: 500", "Zeni: 200.000"],
    foto: Piccolo, // Foto de placeholder
  },
  {
    nome: "Trunks Futuro I",
    requisitos: ["History Points: 100", "Green Orb: 500", "Zeni: 200.000"],
    foto: Trunks1, // Foto de placeholder
  },
  {
    nome: "Trunks Futuro II",
    requisitos: ["History Points: 100", "Green Orb: 500", "Zeni: 200.000"],
    foto: Trunks2, // Foto de placeholder
  },
  {
    nome: "Freeza Sem Nave",
    requisitos: ["History Points: 100", "Green Orb: 500", "Zeni: 200.000"],
    foto: Freeza, // Foto de placeholder
  },
  {
    nome: "Dende",
    requisitos: ["History Points: 100", "Green Orb: 500", "Zeni: 200.000"],
    foto: Dende, // Foto de placeholder
  },
  {
    nome: "Tenshinhan",
    requisitos: ["History Points: 100", "Green Orb: 500", "Zeni: 200.000"],
    foto: Tenshinhan, // Foto de placeholder
  },
  {
    nome: "Kuririn Traje Alternativo",
    requisitos: ["History Points: 100", "Green Orb: 500", "Zeni: 200.000"],
    foto: Kuririn, // Foto de placeholder
    specialClass: true,
  },
  {
    nome: "Gurdo",
    requisitos: ["EXCLUSIVO EVENTO: 1"],
    foto: Gurdo, // Foto de placeholder
  },
  {
    nome: "Recoome",
    requisitos: ["EXCLUSIVO EVENTO: 1"],
    foto: Recoome, // Foto de placeholder
  },
  {
    nome: "Jeice",
    requisitos: ["EXCLUSIVO EVENTO: 1"],
    foto: Jeice, // Foto de placeholder
  },
  {
    nome: "Burter",
    requisitos: ["EXCLUSIVO EVENTO: 1"],
    foto: Burter, // Foto de placeholder
  },
  {
    nome: "Ginyu",
    requisitos: ["EXCLUSIVO EVENTO: 1"],
    foto: Ginyu, // Foto de placeholder
  },
];

const Comum: React.FC = () => {
  return (
    <PersonagemContainer>
      <CardWrapper>
        {personagens.map(({ nome, requisitos, foto, specialClass }, index) => (
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
        ))}
      </CardWrapper>
    </PersonagemContainer>
  );
};

export default Comum;
