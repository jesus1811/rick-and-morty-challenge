import React from 'react';
import styles from './title.module.scss';

interface Prop {
  children: any;
  variant: 'primary' | 'secundary' | 'white';
}

export const Title = ({ children, variant }: Prop) => {
  return <h1 className={`${styles.text} ${styles[`text__${variant}`]}`}>{children}</h1>;
};
