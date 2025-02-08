import React from "react";
import background from "./img/vlt-bg.png";

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
            paddingTop: "140px",
            letterSpacing: "12px",
            lineHeight: "28px",
          }}
        >
          25:00
        </h1>

        {/* Buttons Container (Play & Reset in a row) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px", // Space between buttons
            marginTop: "50px",
          }}
        >
          {/* Play Button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 16 16"
            fill="currentColor"
            onClick={handlePlay}
            style={{
              cursor: "pointer",
              color: "#4E4037",
            }}
          >
            <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
          </svg>

          {/* Reset Button */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 16 16"
            fill="currentColor"
            onClick={handleReset}
            style={{
              cursor: "pointer",
              color: "#4E4037",
            }}
          >
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
