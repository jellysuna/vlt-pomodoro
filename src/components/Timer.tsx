import React, { useEffect, useRef } from "react";

interface TimerProps {
  isRunning: boolean;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: React.FC<TimerProps> = ({ isRunning, time, setTime }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Create a ref for the audio element

  useEffect(() => {
    if (!isRunning) return; // Don't do anything if not running

    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          // Play sound when the timer hits 0
          if (audioRef.current) {
            audioRef.current.play();
          }
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount or state change
  }, [isRunning, setTime]);

  // Stop the sound if the timer is reset
  useEffect(() => {
    if (!isRunning && audioRef.current) {
      audioRef.current.pause(); // Pause the audio
      audioRef.current.currentTime = 0; // Reset the audio to the start
    }
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <>
      <h1
        style={{
          fontFamily: "'Jacquard 12', serif",
          fontSize: "160px",
          fontWeight: "bold",
          paddingTop: "50px",
          letterSpacing: "12px",
          lineHeight: "28px",
        }}
      >
        {formatTime(time)}
      </h1>

      {/* Hidden Audio Player for Alert Sound */}
      <audio ref={audioRef} src="/sounds/alert.mp3" />
    </>
  );
};

export default Timer;
