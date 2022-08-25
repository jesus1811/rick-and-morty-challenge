import React from "react";
import styles from "./title.module.scss";

interface Prop {
  children: string;
}

const Title = ({ children }: Prop) => {
  return <h1 className={styles.text}>{children}</h1>;
};

export default Title;
