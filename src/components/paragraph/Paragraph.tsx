import React from 'react';
import styles from './paragraph.module.scss';

interface Prop {
  size: 'small' | 'medium' | 'large';
  children: any;
  variant: 'primary' | 'secundary' | 'white';
}

const Paragraph = ({ variant, children, size }: Prop) => {
  return (
    <p className={`${styles.text} ${styles[`text__${variant}`]} ${styles[`text__${size}`]}`}>
      {children}
    </p>
  );
};

export default Paragraph;
