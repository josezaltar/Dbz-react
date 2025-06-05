import React from "react";
import { Container, Title, List } from "./styles"; // Importa os estilos

const Tutorial: React.FC = () => {
  return (
    <Container>
      <Title>Comandos do Jogo</Title>
      <p>
        Aprenda tudo o que você precisa para dominar Dragon Ball Z Revolution,
        desde os movimentos básicos até as técnicas mais avançadas!
      </p>

      <h2>Movimentação</h2>
      <List>
        <li>
          <strong>W, A, S, D:</strong> Mover para Cima, Esquerda, Baixo, Direita
        </li>
        <li>
          <strong>Duplo Toque (A ou D):</strong> Dash (Corrida Rápida)
        </li>
        <li>
          <strong>Barra de Espaço:</strong> Pular
        </li>
        <li>
          <strong>Tecla V (Segurar):</strong> Voar (consome Ki)
        </li>
      </List>

      <h2>Controles Básicos</h2>
      <List>
        <li>
          <strong>Clique Esquerdo / Tecla J:</strong> Ataque Físico Básico
          (inicia combos)
        </li>
        <li>
          <strong>Clique Direito / Tecla K:</strong> Bloqueio / Defesa
        </li>
        <li>
          <strong>Tecla E:</strong> Interagir com Personagens / Coletar Itens
        </li>
        <li>
          <strong>Tecla I:</strong> Abrir Inventário
        </li>
        <li>
          <strong>Tecla M:</strong> Abrir Mapa do Mundo
        </li>
        <li>
          <strong>Enter:</strong> Ativar Chat
        </li>
      </List>

      <h2>Transformações</h2>
      <p>
        À medida que seu poder aumenta, você poderá desbloquear e ativar
        transformações icônicas!
      </p>
      <List>
        <li>
          <strong>
            Tecla T (quando barra de transformação estiver cheia):
          </strong>
          Ativar/Desativar Transformação Selecionada
        </li>
        <li>
          <strong>Teclas (Ex: F1, F2):</strong> Selecionar Transformação (se
          mais de uma disponível)
        </li>
        <li>
          As transformações aumentam seus atributos, mas podem consumir Ki
          continuamente.
        </li>
      </List>

      <h2>Sistema de Lutas</h2>
      <p>
        O combate em Dragon Ball Z Revolution é dinâmico e recompensa
        habilidade.
      </p>
      <List>
        <li>
          <strong>Combos:</strong> Sequências de ataques básicos (Clique
          Esquerdo / J) podem desferir combos poderosos.
        </li>
        <li>
          <strong>Quebra de Defesa:</strong> Alguns ataques ou habilidades podem
          quebrar o bloqueio do oponente.
        </li>
        <li>
          <strong>Esquiva:</strong> Use o Dash (Duplo Toque A ou D) no momento
          certo para esquivar de ataques.
        </li>
        <li>
          <strong>Disputa de Ki:</strong> Em confrontos de rajadas de energia,
          pressione repetidamente a tecla indicada para vencer!
        </li>
      </List>
    </Container>
  );
};

export default Tutorial;
