import React from "react";
import Paragraph from "../paragraph/Paragraph";
import styles from "./navBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Paragraph size="large" variant="white">
          Rick and Morty App
        </Paragraph>
        <input className={styles.checkBox} type="checkbox" id="checkbox" />
        <label className={styles.menuIsToggle} htmlFor="checkbox">
          <img className={styles.menuImage} src="/menu.svg" alt="" />
        </label>
        <div className={styles.options}>
          <h1 className={styles.option}>Characters</h1>
          <h1 className={styles.option}>Episodes</h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
