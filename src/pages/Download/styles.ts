import styled from "styled-components";

export const Container = styled.section`
  padding: 40px 0;
  background-color: #1a252f;
  color: #f0f0f0;
`;

export const DownloadItem = styled.div`
  background-color: #343a40;
  padding: 25px;
  margin: 20px auto;
  border-radius: 8px;
  max-width: 600px;
  border: 1px solid #495057;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;

  h3 {
    color: #ff6600;
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    color: #f0f0f0;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .download-info {
    font-size: 14px;
    color: #a0a0a0;
  }
`;

export const Button = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 12px 25px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  font-family: "SaiyanSans", Arial, sans-serif;
  margin-top: 15px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #0056b3;
    outline: none;
  }
`;
