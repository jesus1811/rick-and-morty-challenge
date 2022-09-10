import React from 'react';
import styles from './input.module.scss';

interface Prop {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | number;
}

export const Input = ({ placeholder, onChange, value }: Prop) => {
  return (
    <input className={styles.input} placeholder={placeholder} onChange={onChange} value={value} />
  );
};
