import React from 'react';
import styles from './input.module.scss';

interface Prop {
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ placeholder, onChange }: Prop) => {
  return <input className={styles.field} placeholder={placeholder} onChange={onChange} />;
};
