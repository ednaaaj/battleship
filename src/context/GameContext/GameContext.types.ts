import { WithChild, Ship, MovesType } from "../../constants/types";
export type GameProviderType = WithChild<{}>;

export type SetMovesType = (ship: Ship) => void;

export type GameContextType = {
  moves: MovesType[];
  setMoves: SetMovesType;
};
