import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles/styles"; // Estilos globais
import Home from "./pages/Home"; // Página Home
import About from "./pages/About"; // Página About
import Personagens from "./pages/Personagens"; // Página Personagens
import Tutorial from "./pages/Tutorial"; // Página Tutorial
import Download from "./pages/Download"; // Página Download
import GuiaQuests from "./pages/GuiaQuests"; // Página Guia de Quests
import Galeria from "./pages/Galeria"; // Página Galeria
import Comunidade from "./pages/Comunidade"; // Página Comunidade

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/personagens" element={<Personagens />} />
        <Route path="/downloads" element={<Download />} />
        <Route path="/comandos" element={<Tutorial />} />
        <Route path="/quests" element={<GuiaQuests />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/comunidade" element={<Comunidade />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
