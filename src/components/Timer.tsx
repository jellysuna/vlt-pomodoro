import React, { useState, useEffect } from "react";

interface TimerProps {
  isRunning: boolean;
  onTimeUp?: () => void;
}

const Timer: React.FC<TimerProps> = ({ isRunning, onTimeUp }) => {
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          if (onTimeUp) onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, [isRunning, onTimeUp]);

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
