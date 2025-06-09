import styled from "styled-components";
import { Colors, Spacing, Breakpoints, Shadows } from "../../styles/variables"; // Importando as variáveis

export const Container = styled.section`
  padding: ${Spacing.large} ${Spacing.small};
  text-align: center;
  background-color: ${Colors.background};
  color: ${Colors.secondary};
  border-radius: 10px;
  max-width: 95%;
  margin: ${Spacing.large} auto;
  overflow: hidden;
  box-shadow: ${Shadows.heavy};

  @media (max-width: ${Breakpoints.tablet}) {
    padding: ${Spacing.medium} ${Spacing.small};
  }

  @media (max-width: ${Breakpoints.mobile}) {
    padding: ${Spacing.small};
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${Colors.primary};
  margin-bottom: ${Spacing.large};
  text-align: center;
  -webkit-text-stroke: 0.8px #000;

  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h2`
  -webkit-text-stroke: 0.5px #000;
  font-size: 2rem;
  color: ${Colors.primary};
  margin-bottom: ${Spacing.medium};
  text-align: center;

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

export const Text = styled.p`
  font-size: 1.25rem;
  margin-top: ${Spacing.small};
  color: ${Colors.secondary};
  text-align: center;
  margin-bottom: ${Spacing.xLarge};

  strong {
    color: ${Colors.primary};
  }

  @media (max-width: ${Breakpoints.tablet}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 1rem;
    margin-top: ${Spacing.medium};
    margin-bottom: ${Spacing.large};
  }
`;

export const VideoContainer = styled.div`
  max-width: 100%;
  margin: ${Spacing.medium} 0;
  display: flex;
  justify-content: center;

  iframe {
    border-radius: 10px;
    box-shadow: ${Shadows.medium};
  }

  @media (max-width: ${Breakpoints.mobile}) {
    iframe {
      width: 100%;
      height: auto;
    }
  }
`;

export const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${Spacing.small};
  margin-top: ${Spacing.medium};

  @media (max-width: ${Breakpoints.tablet}) {
    gap: ${Spacing.xsmall};
  }

  @media (max-width: ${Breakpoints.mobile}) {
    gap: ${Spacing.small};
  }
`;

export const GalleryImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: ${Shadows.medium};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(
      1.05
    ); // Efetua um efeito de zoom quando o usuário passar o mouse
  }

  @media (max-width: ${Breakpoints.tablet}) {
    width: 180px;
    height: 135px;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    width: 160px;
    height: 120px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background: #000;
  border-radius: 10px;
  max-width: 100%;
  max-height: 100%;

  @media (max-width: ${Breakpoints.tablet}) {
    max-width: 95%;
  }

  @media (max-width: ${Breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: ${Colors.primary};
  cursor: pointer;

  &:hover {
    color: ${Colors.secondary};
  }

  @media (max-width: ${Breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;
