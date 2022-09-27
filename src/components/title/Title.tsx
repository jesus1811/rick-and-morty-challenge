import React from 'react';
import styles from './title.module.scss';
import cn from 'classnames';

interface Prop {
  children: any;
  primary?: boolean;
  secundary?: boolean;
  white?: boolean;
  left?: boolean;
  // variant: 'primary' | 'secundary' | 'white';
}

export const Title = ({ children, primary, secundary, white, left }: Prop) => {
  return (
    <h1
      className={cn(
        styles.title,
        { [styles['title--primary']]: primary },
        { [styles['title--secundary']]: secundary },
        { [styles['title--white']]: white },
        { [styles['title--left']]: left }
      )}
    >
      {children}
    </h1>
  );
};
