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
      <Button variant="primary" onClick={() => setSeason(1)}>
        season 1
      </Button>
      <Button variant="primary" onClick={() => setSeason(2)}>
        season 2
      </Button>
      <Button variant="disable" onClick={() => {}}>
        season 3
      </Button>
    </div>
  );
};

export default Pagination;
