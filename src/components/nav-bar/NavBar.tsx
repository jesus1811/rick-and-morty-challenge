import Link from 'next/link';
import React from 'react';
import styles from './navBar.module.scss';

export const NavBar = () => {
  return (
    <section className={styles.navBar}>
      <div className={styles.content}>
        <Link href="/home">
          <h1 className={styles.title}>Rickvana</h1>
        </Link>
        <input className={styles.checkBox} type="checkbox" id="checkbox" />
        <label className={styles.menu} htmlFor="checkbox">
          <img className={styles.menu__image} src="/menu.svg" alt="menu" />
        </label>
        <div className={styles.options}>
          <Link href="/home">
            <h1 className={styles.options__option}>Episodes</h1>
          </Link>
          <Link href="/character">
            <h1 className={styles.options__option}>Characters</h1>
          </Link>
          <Link href="/location">
            <h1 className={styles.options__option}>Locations</h1>
          </Link>
        </div>
      </div>
    </section>
  );
};
