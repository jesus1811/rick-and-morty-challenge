import React from 'react';
import styles from './paragraph.module.scss';
import cn from 'classnames';

interface Prop {
  children: React.ReactNode;
  primary?: boolean;
  secundary?: boolean;
  white?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

export const Paragraph = ({ children, primary, secundary, white, small, medium, large }: Prop) => {
  return (
    <p
      className={cn(
        styles.paragraph,
        { [styles['paragraph--primary']]: primary },
        { [styles['paragraph--secundary']]: secundary },
        { [styles['paragraph--white']]: white },
        { [styles['paragraph--small']]: small },
        { [styles['paragraph--medium']]: medium },
        { [styles['paragraph--large']]: large }
      )}
    >
      {children}
    </p>
  );
};
