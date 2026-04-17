import React from "react";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";

const projects = [
  {
    id: 1,
    title: "Projeto 01 - Conversor de Moedas",
    description: "Ferramenta que converte valores entre diferentes moedas (com valores fixos ou via API).",
    link: "#"
  },
  {
    id: 2,
    title: "Projeto 02 - Jogo da Velha (Tic-Tac-Toe)",
    description: "Implementação interativa para jogar contra outro usuário.",
    link: "#"
  }
];

function App() {
  return (
    <div>
      <Header />
      <ProjectsSection projects={projects} />
    </div>
  );
}

export default App;
