import React, { ReactNode } from 'react';
import styles from './card.module.scss';
import cn from 'classnames';
interface Prop {
  children: ReactNode;
  row?: boolean;
}

export const Card = ({ children, row }: Prop) => {
  return <article className={cn(styles.card, { [styles['card--row']]: row })}>{children}</article>;
};
