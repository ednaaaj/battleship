import { WithChild } from "../../constants/types";

export type BoxProps = WithChild<{
  onClick?: () => void;
  variant?: string | "primary" | "secondary" | "white";
}>;
