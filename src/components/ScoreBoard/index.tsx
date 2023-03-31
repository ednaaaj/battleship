import { FC, memo } from "react";
import Box from "../Box";
import { ScoreType } from "./ScoreBoard.types";
import { usePlayerData } from "../../context/PlayersDataContext";
import styles from "./ScoreBoard.module.css";

const Score: FC<ScoreType> = ({ player = 1, score = 0 }) => {
  return (
    <div className={styles.scoreContainer}>
      <span className={styles.score}>{score.toString().padStart(2, "0")}</span>
      <hr className={styles.scoreDivider} />
      <span className={styles.player}>player {player}</span>
    </div>
  );
};

const ScoreBoard: FC<{}> = memo(() => {
  const [players] = usePlayerData();

  if (!players.playersData.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.scoreBoard}>
        {players.playersData.map((player, index) => {
          return (
            <Box key={index} variant={player.variantBG}>
              <Score player={player.label} score={player.score} />
            </Box>
          );
        })}
      </div>
    </div>
  );
});

export default ScoreBoard;
