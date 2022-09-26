import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';

interface Prop {
  children?: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  disable?: boolean;
  secundary?: boolean;
  outline?: boolean;
}

export const Button = ({ children, onClick, primary, disable, secundary, outline }: Prop) => {
  return (
    <button
      className={cn(
        styles.button,
        { [styles['button--primary']]: primary },
        { [styles['button--secundary']]: secundary },
        { [styles['button--outline']]: outline },
        { [styles['button--disable']]: disable }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
