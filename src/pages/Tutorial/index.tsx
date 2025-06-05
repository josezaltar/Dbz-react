import React, { useState } from "react";
import {
  Container,
  Title,
  List,
  ListItem,
  Content,
  ContentTitle,
  ContentText,
} from "./styles"; // Importando os estilos

// Importando as imagens
import movimentacaoImage from "../../assets/images/tutorial/movimentacao.png";
import controlesImage from "../../assets/images/tutorial/controles.png";
import transformacoesImage from "../../assets/images/tutorial/transformacoes.png";
import lutasImage from "../../assets/images/tutorial/lutas.png";
import tecnicasImage from "../../assets/images/tutorial/tecnicas.png";
import treinamentoImage from "../../assets/images/tutorial/treinamento.png";

// Definindo o tipo para o conteúdo do tutorial
interface ContentType {
  title: string;
  text: string;
  image: string; // Imagem associada ao tutorial
}

const Tutorial: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("Movimentação");

  // O tipo 'Record<string, ContentType>' é utilizado para garantir que cada chave (tópico) tenha um título, texto e imagem
  const content: Record<string, ContentType> = {
    Movimentação: {
      title: "Para movimentar utilize as teclas direcionais do seu teclado",
      text: "Use as teclas de direção (Cima, Baixo, Esquerda, Direita) para mover seu personagem no mapa.",
      image: movimentacaoImage,
    },
    "Controles básicos": {
      title:
        "Utilize o botão Shift para correr e a tecla Enter para pegar itens.",
      text: "Aprenda os controles principais para navegar e interagir no mundo.",
      image: controlesImage,
    },
    Transformações: {
      title: "Transformações poderosas ao pressionar teclas específicas",
      text: "As transformações aumentam seus atributos, mas consomem Ki.",
      image: transformacoesImage,
    },
    "Sistema de lutas": {
      title: "Utilize o botão Control para realizar ataques básicos",
      text: "Use o botão Control para realizar ataques físicos e F1 a F6 para usar habilidades especiais.",
      image: lutasImage,
    },
    Treinamento: {
      title: "Colecione skins para fortalecer seu personagem",
      text: "Colecione skins de Ball para aumentar seu poder e de player para fortalecer seu guerreiro.",
      image: treinamentoImage,
    },
    "Ki e técnicas": {
      title: "Aprenda técnicas com os mestres",
      text: "Fale com os mestres espalhados pelo mapa para aprender novas técnicas.",
      image: tecnicasImage,
    },
  };

  return (
    <Container>
      <Title>Tutorial</Title> {/* Título fixo na parte superior */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <nav style={{ width: "250px", marginRight: "30px" }}>
          <List>
            {Object.keys(content).map((topic) => (
              <ListItem
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                selected={selectedTopic === topic}
              >
                {topic}
              </ListItem>
            ))}
          </List>
        </nav>

        <Content>
          <ContentTitle>{content[selectedTopic]?.title}</ContentTitle>
          <ContentText>{content[selectedTopic]?.text}</ContentText>
          {/* Exibindo a imagem do tutorial */}
          <img
            src={content[selectedTopic]?.image}
            alt={selectedTopic}
            style={{ width: "75%", height: "auto", marginTop: "20px" }}
          />
        </Content>
      </div>
    </Container>
  );
};

export default Tutorial;
