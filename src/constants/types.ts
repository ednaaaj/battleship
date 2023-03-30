import { ReactNode } from "react";

export type WithChild<P> = P & { children?: ReactNode };

export type Layout = {
  ship: string;
  positions: number[][];
};

export type Ship = {
  ship: string;
  position: number[];
  move: boolean;
  hit: boolean;
};

export type PlayerType = {
  id: number;
  score: number;
  label: number;
  variantBG?: string;
};

export type MovesType = {
  ship: string;
  hit: boolean;
  coord: number[];
};

export type ShipType = {
  size: number;
  count: number;
  hit: number;
  png: string;
};

export type ShipTypes = {
  carrier: ShipType;
  battleship: ShipType;
  cruiser: ShipType;
  submarine: ShipType;
  destroyer: ShipType;
};
