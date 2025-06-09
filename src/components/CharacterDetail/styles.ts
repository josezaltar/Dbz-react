import styled from "styled-components";
import { Colors, Shadows, Spacing } from "../../styles/variables";

const textAlignLeft = `
  text-align: left;
`;

const headingStyle = `
  font-weight: 600;
  -webkit-text-stroke: 0.5px ${Colors.black};
  margin-bottom: 0;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  ${textAlignLeft}
`;

export const Container = styled.div`
  background-color: ${Colors.cardBackground};
  display: flex;
  flex-direction: row;
  max-width: 960px;
  width: 80%;
  border-radius: 8px;
  padding: ${Spacing.medium};
  position: relative;
  color: ${Colors.primary};
  box-shadow: ${Shadows.heavy};
  height: auto;
  max-height: 85%;
  margin-bottom: 0;

  img {
    width: 280px;
    height: 330px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: ${Spacing.medium};
  }

  .info-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .info-column {
    width: 30%;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    font-size: 11px;
    ${textAlignLeft}
  }

  li {
    color: ${Colors.text};
    ${textAlignLeft}
  }

  h2,
  h3,
  h4 {
    ${headingStyle}
  }

  h2 {
    font-size: 50px;
  }

  h3 {
    font-size: 40px;
  }

  h4 {
    font-size: 30px;
  }

  p {
    font-size: 16px;
    margin-bottom: 0;
    line-height: 1.4;
    color: ${Colors.text};
    font-weight: 400;
  }

  strong,
  span {
    color: ${Colors.primary};
  }

  @media (max-width: 1024px) {
    width: 90%;
    img {
      width: 100%;
      height: 230px;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    width: 95%;
    padding: ${Spacing.small};
    img {
      margin-right: 0;
      margin-bottom: 16px;
      width: 100%;
      height: 180px;
    }
    h2 {
      font-size: 2.2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: ${Spacing.xsmall};
    img {
      width: 100%;
      height: 160px;
    }
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.2rem;
    }
    p {
      font-size: 12px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: ${Colors.primary};
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
  padding: 0;
`;
