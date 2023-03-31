import { FC } from "react";
import { data } from "./constants/data";
import styles from "./Game.module.css";

import Board from "./components/Board";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import ShipScore from "./components/ShipScore";
import { usePlayerData } from "./context/PlayersDataContext";

const Game: FC = () => {
  const player = 1;
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.game}>
        <div className={styles.boardContainer}>
          <ScoreBoard />
          <div>
            <ShipScore />
          </div>
        </div>
        <Board player={player} rows={10} cols={10} layout={data.layout} />
      </div>
    </div>
  );
};

export default Game;
