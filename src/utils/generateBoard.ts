import { Layout } from "./../constants/types";
import { Ship } from "../constants/types";
const generateBoard = (
  rows: number = 0,
  cols: number = 0,
  layouts?: Layout[]
): Ship[][] | [] => {
  if (rows && cols) {
    return Array.from({ length: rows }, (_, row) => {
      return Array.from({ length: cols }, (_, col) => {
        let data = { ship: "", position: [row, col], move: false, hit: false };
        if (Array.isArray(layouts)) {
          const findShip = layouts.find((layout) => {
            return layout.positions.find((position) => {
              const [layRow, layCol] = position;
              return layRow === row && layCol === col;
            });
          });
          if (findShip) {
            data = { ...data, ship: findShip.ship };
          }
        }
        return data;
      });
    });
  }
  return [];
};

export { generateBoard };
