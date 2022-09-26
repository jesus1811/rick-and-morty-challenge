import React from 'react';
import { Button, Paragraph } from '@/components';
import styles from './pagination.module.scss';

interface Prop {
  counterPage: number;
  handleCounterNext: () => void;
  handleCounterPrev: () => void;
}

export const Pagination = ({ counterPage, handleCounterNext, handleCounterPrev }: Prop) => {
  return (
    <div className={styles.pagination}>
      <Paragraph size="large" variant="white">
        #Page {counterPage}
      </Paragraph>
      <Button primary onClick={handleCounterPrev}>
        Back
      </Button>
      <Button primary onClick={handleCounterNext}>
        Next
      </Button>
    </div>
  );
};
