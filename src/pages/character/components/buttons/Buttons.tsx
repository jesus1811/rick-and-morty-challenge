import React from 'react';
import styles from './buttons.module.scss';
import { Button, Paragraph } from '@/components';

interface Prop {
  counterPage: number;
  handleCounter: (typ: 'next' | 'back') => void;
}

const Buttons = ({ counterPage, handleCounter }: Prop) => {
  return (
    <div className={styles.buttons}>
      <Paragraph size="large" variant="white">
        #Page {counterPage}
      </Paragraph>
      <Button variant="primary" onClick={() => handleCounter('back')}>
        Back
      </Button>
      <Button variant="primary" onClick={() => handleCounter('next')}>
        Next
      </Button>
    </div>
  );
};

export default Buttons;
