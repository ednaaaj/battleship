import { FC, createContext, useContext, useCallback, useState } from "react";
import {
  GameProviderType,
  GameContextType,
  SetMovesType,
} from "./GameContext.types";
import { MovesType } from "../../constants/types";
import { Ship } from "../../constants/types";

const GameContext = createContext<GameContextType>({
  moves: [],
  setMoves: () => {},
});

const GameProvider: FC<GameProviderType> = ({ children }) => {
  const [moves, setMoves] = useState<MovesType[]>([]);

  const handleMoves = useCallback(
    (ship: Ship) => {
      setMoves((prev) => [
        ...prev,
        { hit: ship.hit, coord: ship.position, ship: ship.ship },
      ]);
    },
    [moves]
  );

  return (
    <GameContext.Provider value={{ moves, setMoves: handleMoves }}>
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = (): [MovesType[], SetMovesType] => {
  const { moves, setMoves } = useContext<GameContextType>(GameContext);
  return [moves, setMoves];
};

export { GameProvider as default, useGameContext };
