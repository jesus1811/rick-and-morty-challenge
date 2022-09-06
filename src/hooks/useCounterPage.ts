import React, { useState } from 'react';

const useCounterPage = () => {
  const [counterPage, setCounterPage] = useState(1);

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

export default useCounterPage;
