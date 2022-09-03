import React from 'react';
import styles from './button.module.scss';

interface Prop {
  children: string;
  onClick: () => void;
  variant: 'primary' | 'outline' | 'secundary' | 'disable';
}

const Button = ({ children, onClick, variant }: Prop) => {
  return (
    <button className={`${styles.button} ${styles[`button__${variant}`]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
