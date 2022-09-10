import React, { useState } from 'react';

export const useCounterPage = () => {
  const [counterPage, setCounterPage] = useState<number>(1);

  const handleCounterPrev = () => {
    if (counterPage !== 1) setCounterPage(counterPage - 1);
  };
  const handleCounterNext = () => {
    setCounterPage(counterPage + 1);
  };
  return {
    counterPage,
    handleCounterNext,
    handleCounterPrev,
  };
};
