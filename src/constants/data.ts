import CarrierPng from "../assets/Carrier Shape.png";
import BattleShipPng from "../assets/Battleship Shape.png";
import CruisePng from "../assets/Carrier Shape.png";
import SubmarinePng from "../assets/Submarine Shape.png";
import DestroyerPng from "../assets/Aircraft Shape.png";

let data = {
  shipTypes: {
    carrier: { size: 5, count: 1, hit: 0, png: CarrierPng },
    battleship: { size: 4, count: 1, hit: 0, png: BattleShipPng },
    cruiser: { size: 3, count: 1, hit: 0, png: CruisePng },
    submarine: { size: 3, count: 1, hit: 0, png: SubmarinePng },
    destroyer: { size: 2, count: 1, hit: 0, png: DestroyerPng },
  },
  layout: [
    {
      ship: "carrier",
      positions: [
        [2, 9],
        [3, 9],
        [4, 9],
        [5, 9],
        [6, 9],
      ],
    },
    {
      ship: "battleship",
      positions: [
        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
      ],
    },
    {
      ship: "cruiser",
      positions: [
        [8, 1],
        [8, 2],
        [8, 3],
      ],
    },
    {
      ship: "submarine",
      positions: [
        [3, 0],
        [3, 1],
        [3, 2],
      ],
    },
    {
      ship: "destroyer",
      positions: [
        [0, 0],
        [1, 0],
      ],
    },
  ],
};

export { data };
