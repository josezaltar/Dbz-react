import React, { useState } from "react";
import {
  Container,
  Title,
  SubTitle,
  Text,
  VideoContainer,
  Modal,
  ModalContent,
  CloseButton,
} from "./styles"; // Importa os estilos

// Importação das imagens
import foto2 from "../../assets/images/prints/Captura de tela 2025-06-08 213236.png";
import foto3 from "../../assets/images/prints/Captura de tela 2025-06-08 214136.png";
import foto4 from "../../assets/images/prints/Captura de tela 2025-06-10 222916.png";
import foto5 from "../../assets/images/prints/Captura de tela 2025-06-08 214153.png";

const Galeria: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <Container>
      <Title>Galeria de Mídia</Title>
      <Text>
        Explore a galeria de vídeos e outros conteúdos relacionados ao universo
        de DBZ Revolution! Veja trailers, teasers e momentos épicos do jogo.
      </Text>

      <SubTitle>Imagens do Jogo</SubTitle>
      <div>
        <img
          src={foto3} // Corrigido para usar a variável de importação
          alt="Imagem 2"
          onClick={() => openModal(foto3)} // Passando a variável correta
          style={{ width: "200px", margin: "10px", cursor: "pointer" }}
        />
        <img
          src={foto4} // Corrigido para usar a variável de importação
          alt="Imagem 3"
          onClick={() => openModal(foto4)} // Passando a variável correta
          style={{ width: "200px", margin: "10px", cursor: "pointer" }}
        />
        <img
          src={foto5} // Corrigido para usar a variável de importação
          alt="Imagem 4"
          onClick={() => openModal(foto5)} // Passando a variável correta
          style={{ width: "200px", margin: "10px", cursor: "pointer" }}
        />
        <img
          src={foto2} // Corrigido para usar a variável de importação
          alt="Imagem 5"
          onClick={() => openModal(foto2)} // Passando a variável correta
          style={{ width: "200px", margin: "10px", cursor: "pointer" }}
        />
      </div>

      <SubTitle>Vídeo Oficial</SubTitle>
      <VideoContainer>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/62NZDF6df3Y?si=lxsKu-mWr2wUyZ_J"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </VideoContainer>

      {isModalOpen && modalImage && (
        <Modal>
          <ModalContent>
            <img
              src={modalImage}
              alt="Imagem em tamanho maior"
              style={{ maxWidth: "100%", maxHeight: "80vh" }}
            />
            <CloseButton onClick={closeModal}>X</CloseButton>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Galeria;
