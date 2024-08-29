import { useEffect, useState } from 'react';

const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  const getReturnValues = (countTimer: number) => {
    // calculate time left
    const days = Math.floor(countTimer / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countTimer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((countTimer % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countTimer % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

export { useCountdown };
