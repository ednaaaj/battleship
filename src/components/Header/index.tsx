import { FC } from "react";
import styles from "./header.module.css";

const Header: FC<{}> = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.wrapper}>
        <div className={`${styles.logo} ${styles.box1}`}></div>
        <div className={`${styles.input} ${styles.box2}`}></div>
        <div className={`${styles.inputLogo} ${styles.box3}`}></div>
        <div className={`${styles.items} ${styles.box4}`}></div>
        <div className={`${styles.items} ${styles.box5}`}></div>
        <div className={`${styles.items} ${styles.box6}`}></div>
      </div>
    </nav>
  );
};
export default Header;
