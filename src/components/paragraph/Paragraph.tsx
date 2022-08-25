import React from "react";
import styles from "./paragraph.module.scss";

interface Prop {
  variant: "text__small" | "text__medium" | "text__large";
  children: any;
}

const Paragraph = ({ variant, children }: Prop) => {
  return <p className={`${styles.text} ${styles[variant]}`}>{children}</p>;
};

export default Paragraph;
