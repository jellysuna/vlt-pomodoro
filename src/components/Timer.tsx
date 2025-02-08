import React, { useEffect } from "react";

interface TimerProps {
  isRunning: boolean;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<TimerProps> = ({ isRunning, time, setTime }) => {
  useEffect(() => {
    if (!isRunning) return; // Don't do anything if not running

    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount or state change
  }, [isRunning, setTime]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <h1
      style={{
        fontFamily: "'Jacquard 12', serif",
        fontSize: "150px",
        fontWeight: "bold",
        paddingTop: "150px",
        letterSpacing: "12px",
        lineHeight: "28px",
      }}
    >
      {formatTime(time)}
    </h1>
  );
};

export default Timer;
