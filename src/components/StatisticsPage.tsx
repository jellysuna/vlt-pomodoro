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
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "16px",
            paddingTop: "50px",
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
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
              🍅 Pomodoro
            </h2>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              Working time:{" "}
              {pomodoroStats?.time ? formatTime(pomodoroStats.time) : "0h 0m"}
            </p>
            <p style={{ fontSize: "16px" }}>
              Completed: {pomodoroStats?.cycles ? pomodoroStats.cycles : "0"}
            </p>
          </div>

          {/* Break Stats */}
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>☕ Break</h2>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              Break time:{" "}
              {breakStats?.time ? formatTime(breakStats.time) : "0h 0m"}
            </p>
            <p style={{ fontSize: "16px" }}>
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
