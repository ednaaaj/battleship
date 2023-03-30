import { PlayerType, WithChild, ShipTypes } from "../../constants/types";

export type SetPlayerDataType = (ship: string, player: number) => void;
export type PlayersDataType = {
  playersData: PlayerType[];
  ships: ShipTypes;
};

export type PlayerDataContextType = {
  playerData: PlayersDataType;
  setPlayerData: SetPlayerDataType;
};

export type PlayerDataContextProvided = WithChild<{}>;
