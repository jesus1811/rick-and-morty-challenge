import Link from "next/link";
import React from "react";
import styles from "./navBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/home">
          <h1 className={styles.title}>Rickvana</h1>
        </Link>

        <input className={styles.checkBox} type="checkbox" id="checkbox" />
        <label className={styles.menuIsToggle} htmlFor="checkbox">
          <img className={styles.menuImage} src="/menu.svg" alt="" />
        </label>
        <div className={styles.options}>
        <Link href="/home">
            <h1 className={styles.option}>Episodes</h1>
          </Link>
          <Link href="/character">
            <h1 className={styles.option}>Characters</h1>
          </Link>
          <Link href="/location">
            <h1 className={styles.option}>Locations</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
