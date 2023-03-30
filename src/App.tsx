import { useState } from "react";
import Game from "./Game";
import GameProvider from "./context/GameContext";
import PlayersDataProvider from "./context/PlayersDataContext";

function App() {
  return (
    <GameProvider>
      <PlayersDataProvider>
        <Game />
      </PlayersDataProvider>
    </GameProvider>
  );
}

export default App;
