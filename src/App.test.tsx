import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App"; // Não envolva com BrowserRouter aqui

test("renders the home page with welcome message", () => {
  render(<App />); // Apenas renderiza o App diretamente
  expect(screen.getByText(/Bem-vindo ao DBZ Revolution!/i)).toBeInTheDocument();
});
