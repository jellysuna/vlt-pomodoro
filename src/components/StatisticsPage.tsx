import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import background from "./img/plain-bg.png";

const StatisticsPage: React.FC = () => {
  const [pomodoroStats, setPomodoroStats] = useState({ time: 0, cycles: 0 });
  const [breakStats, setBreakStats] = useState({ time: 0, cycles: 0 });

  useEffect(() => {
    const pomodoroData = localStorage.getItem("pomodoroStats");
    const breakData = localStorage.getItem("breakStats");

    if (pomodoroData) setPomodoroStats(JSON.parse(pomodoroData));
    if (breakData) setBreakStats(JSON.parse(breakData));
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#4E4037",
      }}
    >
      <div
        style={{
          textAlign: "center",
          minWidth: "300px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Roboto Mono', serif",
            fontSize: "44px",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          Pomodoro Stats
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {/* Pomodoro Stats */}
          <div
            style={{
              backgroundColor: "#b5e2ff",
              padding: "25px 230px 20px 25px",
              borderRadius: "15px",
              textAlign: "left",
              minWidth: "300px",
              display: "flex",
              alignItems: "center", // Aligns the line and text
            }}
          >
            {/* Vertical Line Inside */}
            <div
              style={{
                backgroundColor: "#5897b5",
                borderRadius: "10px",
                height: "100px",
                width: "6px",
                marginRight: "15px", // Space between line and text
              }}
            ></div>

            {/* Text Section */}
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingBottom: "10px",
                  paddingLeft: "20px",
                }}
              >
                🍅 Pomodoro
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  marginTop: "10px",
                  paddingLeft: "20px",
                }}
              >
                Working time:{" "}
                {pomodoroStats?.time ? formatTime(pomodoroStats.time) : "0h 0m"}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  marginTop: "-5px",
                  paddingLeft: "20px",
                }}
              >
                Completed: {pomodoroStats?.cycles ? pomodoroStats.cycles : "0"}
              </p>
            </div>
          </div>

          {/* Break Stats */}
          <div
            style={{
              backgroundColor: "#abf7b1",
              padding: "25px 230px 20px 25px",
              borderRadius: "15px",
              textAlign: "left",
              minWidth: "300px",
              display: "flex",
              alignItems: "center", // Aligns the line and text
            }}
          >
            {/* Vertical Line Inside */}
            <div
              style={{
                backgroundColor: "#58b574",
                borderRadius: "10px",
                height: "100px",
                width: "6px",
                marginRight: "15px", // Space between line and text
              }}
            ></div>

            {/* Text Section */}
            <div>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  paddingBottom: "10px",
                  paddingLeft: "20px",
                }}
              >
                ☕ Break
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  marginTop: "10px",
                  paddingLeft: "20px",
                }}
              >
                Break time:{" "}
                {breakStats?.time ? formatTime(breakStats.time) : "0h 0m"}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  marginTop: "-5px",
                  paddingLeft: "20px",
                }}
              >
                Completed: {breakStats?.cycles ? breakStats.cycles : "0"}
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "none",
            color: "#4E4037",
            borderRadius: "8px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center", // Align icon and text
            gap: "8px", // Space between icon and text
          }}
        >
          {/* SVG Arrow Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
          Back to Timer
        </Link>
      </div>
    </div>
  );
};

export default StatisticsPage;
