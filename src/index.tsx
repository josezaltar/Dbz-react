import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/styles"; // Importa o GlobalStyle
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <GlobalStyle /> {/* Aplica os estilos globais */}
    <Router>
      <App />
    </Router>
  </>
);
