import React from 'react';
import { Button, Paragraph } from '@/components';
import styles from './pagination.module.scss';

interface Prop {
  setSeason: (number: number) => void;
  season: number;
}

const Pagination = ({ setSeason, season }: Prop) => {
  return (
    <div className={styles.buttons}>
      <Paragraph size="large" variant="white">
        Season {season}
      </Paragraph>
      <Button primary onClick={() => setSeason(1)}>
        season 1
      </Button>
      <Button primary onClick={() => setSeason(2)}>
        season 2
      </Button>
      <Button disable>season 3</Button>
    </div>
  );
};

export default Pagination;
