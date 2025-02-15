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
            display: "column",
            gap: "20px",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          {/* Pomodoro Stats */}
          <div
            style={{
              backgroundColor: "#ffff",
              borderRadius: "10px",
              height: "70px",
              width: "6px",
              marginLeft: "18px",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#b5e2ff",
              padding: "25px 300px 20px 60px",
              marginTop: "-90px",
              marginBottom: "30px",
              borderRadius: "15px",
              textAlign: "left",
              minWidth: "300px",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              🍅 Pomodoro
            </h2>
            <p style={{ fontSize: "16px", marginTop: "10px" }}>
              Working time:{" "}
              {pomodoroStats?.time ? formatTime(pomodoroStats.time) : "0h 0m"}
            </p>
            <p style={{ fontSize: "16px", marginTop: "-5px" }}>
              Completed: {pomodoroStats?.cycles ? pomodoroStats.cycles : "0"}
            </p>
          </div>

          {/* Break Stats */}
          <div
            style={{
              backgroundColor: "#abf7b1",
              padding: "25px 300px 20px 60px",
              marginBottom: "30px",
              borderRadius: "15px",
              textAlign: "left",
              minWidth: "300px",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                paddingBottom: "10px",
              }}
            >
              ☕ Break
            </h2>
            <p style={{ fontSize: "16px", marginTop: "10px" }}>
              Break time:{" "}
              {breakStats?.time ? formatTime(breakStats.time) : "0h 0m"}
            </p>
            <p style={{ fontSize: "16px", marginTop: "-5px" }}>
              Completed: {breakStats?.cycles ? breakStats.cycles : "0"}
            </p>
          </div>
        </div>

        {/* Back Button */}
        <Link
          to="/"
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          ⬅ Back to Timer
        </Link>
      </div>
    </div>
  );
};

export default StatisticsPage;
