import styled from "styled-components";

export const Container = styled.section`
  padding: 40px 0;
  background-color: #1a252f;
  color: #f0f0f0;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #ff6600;
  text-align: center;
  margin-bottom: 20px;
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  iframe {
    max-width: 100%;
    height: auto;
  }
`;
