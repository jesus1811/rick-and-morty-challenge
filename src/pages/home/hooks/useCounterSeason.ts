import React, { useState } from 'react';

const useCounterSeason = () => {
  const [counterSeason, setCounterSeason] = useState<number>(1);

  const handleCounterSeason = (number: number): void => {
    setCounterSeason(number);
  };
  return {
    counterSeason,
    handleCounterSeason,
  };
};

export default useCounterSeason;
