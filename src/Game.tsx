import { FC } from "react";
import { data } from "./constants/data";
import styles from "./Game.module.css";

import Board from "./components/Board";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import ShipScore from "./components/ShipScore";

const Game: FC = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.game}>
        <div className={styles.boardContainer}>
          <ScoreBoard />
          <ShipScore />
        </div>
        <Board rows={10} cols={10} layout={data.layout} />
      </div>
    </div>
  );
};

export default Game;
