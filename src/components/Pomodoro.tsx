import React from "react";
import background from "./img/vlt-bg.png";
import PlayButton from "./PlayButton";
import ResetButton from "./RestartButton";

const Pomodoro: React.FC = () => {
  const handlePlay = () => {
    console.log("Play button clicked!");
  };

  const handleReset = () => {
    console.log("Reset button clicked!");
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
          25:00
        </h1>

        {/* Buttons Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          <PlayButton onClick={handlePlay} />
          <ResetButton onClick={handleReset} />
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
