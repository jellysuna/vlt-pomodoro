import React, { useState } from "react";
import background from "./img/vlt-bg.png";
import Timer from "./Timer";
import PlayButton from "./PlayButton";
import ResetButton from "./RestartButton";

const Pomodoro: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false); // Track whether it's break time
  const [time, setTime] = useState(25 * 60); // Start with 25 minutes (Pomodoro)

  const handlePlayPause = () => {
    setIsRunning((prev) => !prev); // Toggle timer state
  };

  const handleReset = () => {
    setIsRunning(false); // Stop timer
    setTime(isBreak ? 5 * 60 : 25 * 60); // Reset to either 5 or 25 minutes based on mode
  };

  const handleSwitchMode = () => {
    setIsRunning(false);
    setIsBreak((prev) => !prev); // Toggle between Pomodoro and break mode
    setTime(isBreak ? 25 * 60 : 5 * 60); // Change the time based on mode
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        color: "#4E4037",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* "Take a Break" Button */}
        <button
          onClick={handleSwitchMode}
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "50px",
            background: "transparent",
            border: "3px solid #4E4037",
            borderRadius: "13px",
            color: "#4E4037",
            cursor: "pointer",
            letterSpacing: "2px",
          }}
        >
          {isBreak ? "Pomodoro" : "Take a Break"}
        </button>

        {/* Timer */}
        <Timer isRunning={isRunning} time={time} setTime={setTime} />

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          <PlayButton isRunning={isRunning} onClick={handlePlayPause} />
          <ResetButton onClick={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
