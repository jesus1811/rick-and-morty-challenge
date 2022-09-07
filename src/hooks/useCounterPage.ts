import React, { useState } from 'react';

export const useCounterPage = (setLodader: Function) => {
  const [counterPage, setCounterPage] = useState<number>(1);

  const handleCounterPrev = () => {
    if (counterPage !== 1) {
      setCounterPage(counterPage - 1);
      setLodader(true);
    }
  };
  const handleCounterNext = () => {
    setCounterPage(counterPage + 1);
    setLodader(true);
  };
  return {
    counterPage,
    handleCounterNext,
    handleCounterPrev,
  };
};
