import React from "react";
import styles from "./card.module.scss";
interface Prop {
  children: JSX.Element | JSX.Element[];
}

const Card = ({ children }: Prop) => {
  return <article className={styles.container}>{children}</article>;
};

export default Card;
