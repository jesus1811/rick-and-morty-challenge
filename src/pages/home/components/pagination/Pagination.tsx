import React from 'react';
import { Button, Paragraph } from '@/components';
import styles from './pagination.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { addSeason } from '@/redux/slices';

const Pagination = () => {
  const season = useSelector((store: AppStore) => store.season);
  const dispath = useDispatch();
  const handleCounterSeason = (number: number) => {
    dispath(addSeason(number));
  };
  return (
    <div className={styles.buttons}>
      <Paragraph large white>
        Season {season}
      </Paragraph>
      <Button primary onClick={() => handleCounterSeason(1)}>
        season 1
      </Button>
      <Button primary onClick={() => handleCounterSeason(2)}>
        season 2
      </Button>
      <Button disable>season 3</Button>
    </div>
  );
};

export default Pagination;
