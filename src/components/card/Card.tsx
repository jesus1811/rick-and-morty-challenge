import React, { ReactNode } from 'react';
import styles from './card.module.scss';
interface Prop {
  children: ReactNode;
  flexDirection?: 'row';
}

export const Card = ({ children, flexDirection }: Prop) => {
  return (
    <article className={`${styles.card} ${styles[`container_${flexDirection}`]}`}>
      {children}
    </article>
  );
};
