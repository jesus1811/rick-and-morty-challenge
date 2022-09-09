import React from 'react';
import styles from './paragraph.module.scss';

interface Prop {
  size: 'small' | 'medium' | 'large';
  children: any;
  variant: 'primary' | 'secundary' | 'white';
}

export const Paragraph = ({ variant, children, size }: Prop) => {
  return (
    <p
      className={`${styles.paragraph} ${styles[`paragraph_${variant}`]} ${
        styles[`paragraph_${size}`]
      }`}
    >
      {children}
    </p>
  );
};
