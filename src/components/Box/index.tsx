import { FC, useMemo } from "react";
import { BoxProps } from "./Box.types";
import styles from "./Box.module.css";
import { VARIANTS } from "../../constants/variant";

const Box: FC<BoxProps> = ({
  children = <></>,
  onClick = () => {},
  variant = VARIANTS.WHITE,
}) => {
  const classes = useMemo(() => {
    const boxClasses = {
      [styles.box]: true,
      [styles.boxWhite]: variant === VARIANTS.WHITE,
      [styles.boxPrimary]: variant === VARIANTS.PRIMARY,
      [styles.boxSecondary]: variant === VARIANTS.SECONDARY,
      [styles.boxTertiary]: variant === VARIANTS.TERTIARY,
    };

    return Object.keys(boxClasses)
      .filter((bx) => boxClasses[bx])
      .join(" ");
  }, [variant]);

  return (
    <div onClick={onClick} className={classes}>
      {children}
    </div>
  );
};

export default Box;
