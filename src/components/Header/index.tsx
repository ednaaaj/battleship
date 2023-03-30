import { FC } from "react";
import styles from "./header.module.css";

const Header: FC<{}> = () => {
  return (
    <nav className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.logo}></div>
        <div className={styles.input}></div>
        <div className={styles.inputLogo}></div>
        <div className={styles.items}></div>
        <div className={styles.items}></div>
        <div className={styles.items}></div>
      </div>
    </nav>
  );
};

export default Header;
