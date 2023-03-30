import { FC, useMemo, memo } from "react";
import styles from "./ShipScore.module.css";
import { usePlayerData } from "../../context/PlayersDataContext";
import { ShipType, ShipTypes } from "../../constants/types";
import MissPng from "../../assets/Miss small.png";
import HitPng from "../../assets/Hit small.png";

const HitMissShip: FC<{ size: number; hit: number }> = ({ size, hit }) => {
  if (!size) {
    return null;
  }

  return (
    <div className={styles.hitMissPointContainer}>
      {[...Array.from({ length: size })].map((_, i) => (
        <img
          className={styles.hitmiss}
          alt="miss"
          src={i + 1 <= hit ? HitPng : MissPng}
        />
      ))}
    </div>
  );
};

const ScorePoint: FC<{}> = memo(() => {
  const [playerData] = usePlayerData();

  const shipTypesArray = useMemo(() => {
    return Object.entries(playerData.ships)
      .flatMap(([name, shipType]) => {
        return Array.from({ length: shipType.count }, () => {
          return {
            name: name as keyof ShipTypes,
            ...shipType,
          };
        });
      })
      .sort((a, b) => b.size - a.size);
  }, [playerData]);

  return (
    <div className={styles.scorePoint}>
      {shipTypesArray.map((ship: ShipType & { name: keyof ShipTypes }) => {
        return (
          <div className={styles.ships}>
            <img className={styles.ship} alt="ships" src={ship.png} />
            <HitMissShip size={ship.size} hit={ship.hit} />
          </div>
        );
      })}
    </div>
  );
});

const ShipScore: FC<{}> = () => {
  return (
    <div className={styles.root}>
      <ScorePoint />
    </div>
  );
};

export default ShipScore;
