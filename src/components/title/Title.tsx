import React from 'react';
import styles from './title.module.scss';

interface Prop {
  children: any;
  variant: 'primary' | 'secundary' | 'white';
}

export const Title = ({ children, variant }: Prop) => {
  return <h1 className={`${styles.title} ${styles[`title_${variant}`]}`}>{children}</h1>;
};
