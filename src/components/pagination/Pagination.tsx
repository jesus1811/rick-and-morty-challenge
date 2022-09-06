import React from 'react';
import { Button, Paragraph } from '@/components';
import styles from './pagination.module.scss';

interface Prop {
  counterPage: number;
  handleCounterNext: () => void;
  handleCounterPrev: () => void;
}

const Pagination = ({ counterPage, handleCounterNext, handleCounterPrev }: Prop) => {
  return (
    <div className={styles.buttons}>
      <Paragraph size="large" variant="white">
        #Page {counterPage}
      </Paragraph>
      <Button variant="primary" onClick={handleCounterPrev}>
        Back
      </Button>
      <Button variant="primary" onClick={handleCounterNext}>
        Next
      </Button>
    </div>
  );
};

export default Pagination;
