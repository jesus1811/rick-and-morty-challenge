import React, { ReactNode } from 'react';
import styles from './card.module.scss';
interface Prop {
  children: ReactNode;
}

const Card = ({ children }: Prop) => {
  return <article className={`${styles.container}`}>{children}</article>;
};

export { Card };
