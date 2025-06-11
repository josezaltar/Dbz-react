import React, { useState, useEffect } from "react";
import {
  Container,
  List,
  ListItem,
  Content,
  ContentTitle,
  ContentText,
  Img,
  HamburgerIcon,
  Menu,
  Overlay,
  Title,
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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Estado para controlar o menu hambúrguer

  // Função para alternar o menu
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  // Função para fechar o menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Fecha o menu ao clicar em um link
  };

  // Função para verificar o tamanho da tela e ajustar o estado do menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Fecha o menu quando a tela for maior que 768px
      }
    };

    window.addEventListener("resize", handleResize);

    // Chama a função na primeira renderização para corrigir o estado se necessário
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <>
      <Title>Tutorial</Title>
      <Container isOpen={isMenuOpen}>
        <Overlay isOpen={isMenuOpen} onClick={handleToggleMenu} />
        <HamburgerIcon onClick={handleToggleMenu} isOpen={isMenuOpen}>
          Menu
        </HamburgerIcon>

        <Menu isOpen={isMenuOpen}>
          <List isOpen={isMenuOpen}>
            {Object.keys(content).map((topic) => (
              <ListItem
                key={topic}
                onClick={() => {
                  setSelectedTopic(topic);
                  handleLinkClick(); // Fecha o menu ao clicar em um tópico
                }}
                selected={selectedTopic === topic}
              >
                {topic}
              </ListItem>
            ))}
          </List>
        </Menu>

        <Content>
          <ContentTitle>{content[selectedTopic]?.title}</ContentTitle>
          <ContentText>{content[selectedTopic]?.text}</ContentText>
          <Img src={content[selectedTopic]?.image} alt={selectedTopic} />
        </Content>
      </Container>
    </>
  );
};

export default Tutorial;
