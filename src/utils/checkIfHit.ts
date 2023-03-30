import { Ship, MovesType } from "../constants/types";

const checkIfHit = (moves: MovesType[] = [], cells: Ship[][] = []): Ship[] => {
  let tempCells: Ship[] = cells.flatMap((cell) => cell);
  let tempMoves: MovesType[] = [...moves];
  if (moves.length && cells.length) {
    tempCells = cells.flatMap((tempCell) => {
      return tempCell.map((item) => {
        const [posRow, posCol] = item.position;
        const findCellMove = tempMoves.find((move) => {
          const [rowCoord, colCoord] = move.coord;
          return rowCoord === posRow && colCoord === posCol;
        });

        let itemData = { ...item };
        if (findCellMove) {
          itemData = {
            ...itemData,
            hit: findCellMove.hit,
            move: true,
          };
        }

        return itemData;
      });
    });
  }
  return tempCells;
};

export { checkIfHit };
