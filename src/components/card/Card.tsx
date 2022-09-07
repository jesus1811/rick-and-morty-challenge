import React, { ReactNode } from 'react';
import styles from './card.module.scss';
interface Prop {
  children: ReactNode;
}

export const Card = ({ children }: Prop) => {
  return <article className={`${styles.container}`}>{children}</article>;
};
