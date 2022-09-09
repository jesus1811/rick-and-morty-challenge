import React from 'react';
import styles from './button.module.scss';

interface Prop {
  children: string;
  onClick: () => void;
  variant: 'primary' | 'outline' | 'secundary' | 'disable';
}

export const Button = ({ children, onClick, variant }: Prop) => {
  return (
    <button className={`${styles.button} ${styles[`button_${variant}`]}`} onClick={onClick}>
      {children}
    </button>
  );
};
