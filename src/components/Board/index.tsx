import Box from "../Box";
import { FC, useMemo, memo, useCallback } from "react";
import { BoardType } from "./Board.types";
import { Ship } from "../../constants/types";
import { useGameContext } from "../../context/GameContext";
import { usePlayerData } from "../../context/PlayersDataContext";
import styles from "./Board.module.css";
import HitPng from "../../assets/Hit.png";
import MissPng from "../../assets/Miss.png";
import { checkIfHit } from "../../utils/checkIfHit";
import { generateBoard } from "../../utils/generateBoard";

const Board: FC<BoardType> = memo(({ rows = 0, cols = 0, layout = [] }) => {
  const [moves, setMoves] = useGameContext();
  const [_, setPlayerData] = usePlayerData();

  const boards = useMemo(() => {
    return generateBoard(rows, cols);
  }, [rows, cols]);

  const handleChangeMoves = useCallback(
    (data: Ship, ship: string) => {
      const checkIfAlreadyExist = moves.find((move) => {
        const [rowMove, colMove] = move.coord;
        const [rowData, colData] = data.position;
        return rowMove === rowData && colMove === colData;
      });
      if (boards && !checkIfAlreadyExist) {
        let tempData = { ...data, ship: ship };
        layout.forEach(({ positions }) => {
          positions.forEach((position) => {
            const [rowPos, colPos] = position;
            const [rowData, colData] = data.position;
            if (rowPos === rowData && colPos === colData) {
              tempData = { ...tempData, move: true, hit: true };
            } else {
              tempData = { ...tempData, move: true };
            }
          });
        });

        if (tempData.hit) {
          // since player 1 only need to play
          setPlayerData(ship, 1);
        }
        setMoves(tempData);
      }
    },
    [moves, boards]
  );

  const cells = useMemo<Ship[]>(() => {
    const cells = generateBoard(rows, cols, layout);
    const newCellWithHitBox = checkIfHit(moves, cells);

    return newCellWithHitBox;
  }, [rows, cols, moves]);

  if (!rows && !cols) {
    return null;
  }

  return (
    <>
      <div className={styles.boardWrapper}>
        <div className={styles.board}>
          {cells.map((data, tempKeyRow) => {
            return (
              <div className={styles.cell}>
                <Box
                  key={tempKeyRow}
                  onClick={() => {
                    handleChangeMoves({ ...data, move: true }, data.ship);
                  }}
                  variant="white"
                >
                  {data.move && (
                    <img
                      className={styles.image}
                      src={data.hit ? HitPng : MissPng}
                      alt="Hit or Miss"
                    />
                  )}
                </Box>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
});

export default Board;
