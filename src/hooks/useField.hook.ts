import { useState } from 'react';

export const useField = (initialState: any, limit: number = 9999) => {
  const [value, setValue] = useState(initialState);
  const onChange = (e: any) => {
    setValue(e.target.value.slice(0, limit));
  };
  const handleReset = () => {
    setValue(initialState);
  };
  return {
    onChange,
    handleReset,
    value,
  };
};
