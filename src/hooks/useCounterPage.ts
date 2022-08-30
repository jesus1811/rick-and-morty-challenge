import React, { useState } from "react";

const useCounterPage = () => {
  const [counterPage, setCounterPage] = useState(1);

  const handleCounter = (type: "next" | "back", setLoader: (isToggle: boolean) => void) => {
    setLoader(true);
    if (type === "back" && counterPage !== 1) setCounterPage(counterPage - 1);
    if (type === "next") setCounterPage(counterPage + 1);
  };
  return {
    counterPage,
    handleCounter,
  };
};

export default useCounterPage;
