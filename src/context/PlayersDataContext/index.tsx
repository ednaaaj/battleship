import { createContext, FC, useState, useCallback, useContext } from "react";
import {
  PlayerDataContextType,
  PlayerDataContextProvided,
  SetPlayerDataType,
  PlayersDataType,
} from "./PlayersDataContext.types";
import { data } from "../../constants/data";
import { VARIANTS } from "../../constants/variant";

const initialPlayers = {
  playersData: [
    {
      id: 1,
      score: 0,
      label: 1,
      variantBG: VARIANTS.SECONDARY,
    },
    {
      id: 2,
      score: 0,
      label: 2,
      variantBG: VARIANTS.TERTIARY,
    },
  ],
  ships: data.shipTypes,
};

const PlayersDataContext = createContext<PlayerDataContextType>({
  playerData: { playersData: [], ships: data.shipTypes },
  setPlayerData: () => {},
});

const PlayersDataProvider: FC<PlayerDataContextProvided> = ({ children }) => {
  const [playerData, setPlayerData] = useState<PlayersDataType>(initialPlayers);

  const savePlayerData = useCallback(
    (ship: string, player: number = 1) => {
      if (
        ship === "carrier" ||
        ship === "battleship" ||
        ship === "cruiser" ||
        ship === "submarine" ||
        ship === "destroyer"
      ) {
        const shipData = playerData.ships[ship];
        if (shipData) {
          const tempData = { ...playerData };
          const playerDatapayload = tempData.playersData.map((data) => {
            if (data.id === player) {
              const score = data.score + 1;
              return { ...data, score: score };
            }
            return data;
          });
          tempData.ships[ship] = {
            ...shipData,
            hit:
              shipData.hit > shipData.size ? shipData.size : shipData.hit + 1,
          };
          tempData.playersData = playerDatapayload;

          setPlayerData(tempData);
        }
      }
    },
    [playerData]
  );

  return (
    <PlayersDataContext.Provider
      value={{ playerData, setPlayerData: savePlayerData }}
    >
      {children}
    </PlayersDataContext.Provider>
  );
};

const usePlayerData = (): [PlayersDataType, SetPlayerDataType] => {
  const { playerData, setPlayerData } = useContext(PlayersDataContext);
  return [playerData, setPlayerData];
};

export { PlayersDataProvider as default, usePlayerData };
