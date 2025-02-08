import React from "react";
import background from "./img/vlt-bg.png";

function Pomodoro() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", // This ensures the image covers the entire div
        backgroundPosition: "center", // Optional: This centers the image
        height: "100vh", // Full viewport height
        display: "flex", // To center the text
        justifyContent: "center", // Horizontally center the text
        alignItems: "center", // Vertically center the text
        color: "white", // Adjust text color for visibility if needed
      }}
    >
      <h1
        style={{
          fontFamily: "'Jacquard 12', 'serif'",
          fontSize: "150px",
          fontWeight: "bold",
          paddingBottom: "410px",
          letterSpacing: "12px",
          lineHeight: "28px",
        }}
      >
        25:00
      </h1>
    </div>
  );
}

export default Pomodoro;
