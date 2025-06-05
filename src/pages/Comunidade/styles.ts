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

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 1.2rem;

  li {
    margin-bottom: 15px;
  }

  a {
    color: #ff6600;
    text-decoration: none;
    font-weight: bold;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;
