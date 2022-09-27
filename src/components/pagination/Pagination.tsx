import React from 'react';
import { Button, Paragraph } from '@/components';
import styles from './pagination.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { nextPage, prevPage } from '@/redux/slices';

interface Prop {
  counterPage: number;
}

export const Pagination = () => {
  const page = useSelector((store: AppStore) => store.page);
  const dispatch = useDispatch();
  return (
    <div className={styles.pagination}>
      <Paragraph large white>
        #Page {page}
      </Paragraph>
      <Button primary onClick={() => dispatch(prevPage())}>
        Back
      </Button>
      <Button primary onClick={() => dispatch(nextPage())}>
        Next
      </Button>
    </div>
  );
};
