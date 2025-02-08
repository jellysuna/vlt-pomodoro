import React, { useState } from "react";
import background from "./img/vlt-bg.png";
import Timer from "./Timer";
import PlayButton from "./PlayButton";
import ResetButton from "./RestartButton";

const Pomodoro: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);

  const handlePlayPause = () => {
    setIsRunning((prev) => !prev); // Toggle timer state
  };

  const handleReset = () => {
    setIsRunning(false); // Stop timer
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
        <Timer isRunning={isRunning} />

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
