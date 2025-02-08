import React, { useState } from "react";
import background from "./img/vlt-bg.png";
import Timer from "./Timer";
import PlayButton from "./PlayButton";
import ResetButton from "./RestartButton";

const Pomodoro: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(25 * 60); // Start at 25 minutes

  const handlePlayPause = () => {
    setIsRunning((prev) => !prev); // Toggle timer state
  };

  const handleReset = () => {
    setIsRunning(false); // Stop timer
    setTime(25 * 60); // Reset timer to 25 minutes
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
