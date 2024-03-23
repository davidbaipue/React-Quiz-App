import { useEffect, useState } from "react";
export const Timer = ({ hours, action }) => {
  const [seconds, setSeconds] = useState(hours * 3600);
  useEffect(() => {
    let timer;
    if (action) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(timer);
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [hours, action]);
  const remainingHours = Math.floor(seconds / 3600);
  const remainingMinutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return {
    remainingHours,
    remainingMinutes,
    remainingSeconds,
    seconds,
  };
};
