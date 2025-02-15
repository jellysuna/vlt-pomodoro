import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import background from "./img/plain-bg.png";

interface StatsCardProps {
  title: string;
  emoji: string;
  bgColor: string;
  lineColor: string;
  time: number;
  cycles: number;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  emoji,
  bgColor,
  lineColor,
  time,
  cycles,
}) => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: "25px 230px 20px 25px",
        borderRadius: "15px",
        textAlign: "left",
        minWidth: "300px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Vertical Line */}
      <div
        style={{
          backgroundColor: lineColor,
          borderRadius: "10px",
          height: "100px",
          width: "6px",
          marginRight: "15px",
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
          {emoji} {title}
        </h2>
        <p style={{ fontSize: "16px", marginTop: "10px", paddingLeft: "20px" }}>
          Time: {time ? formatTime(time) : "0h 0m"}
        </p>
        <p style={{ fontSize: "16px", marginTop: "-5px", paddingLeft: "20px" }}>
          Completed: {cycles ?? "0"}{" "}
        </p>
      </div>
    </div>
  );
};

const StatisticsPage: React.FC = () => {
  const [pomodoroStats, setPomodoroStats] = useState({ time: 0, cycles: 0 });
  const [breakStats, setBreakStats] = useState({ time: 0, cycles: 0 });

  useEffect(() => {
    const pomodoroData = localStorage.getItem("pomodoroStats");
    const breakData = localStorage.getItem("breakStats");

    if (pomodoroData) setPomodoroStats(JSON.parse(pomodoroData));
    if (breakData) setBreakStats(JSON.parse(breakData));
  }, []);

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
      <div style={{ textAlign: "center", minWidth: "300px" }}>
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
          {/* Using StatsCard Component */}
          <StatsCard
            title="Pomodoro"
            emoji="🍅"
            bgColor="#b5e2ff"
            lineColor="#5897b5"
            time={pomodoroStats.time}
            cycles={pomodoroStats.cycles}
          />

          <StatsCard
            title="Break"
            emoji="☕"
            bgColor="#abf7b1"
            lineColor="#58b574"
            time={breakStats.time}
            cycles={breakStats.cycles}
          />
        </div>

        {/* Back Button */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link
            to="/"
            style={{
              padding: "10px 20px",
              color: "#4E4037",
              borderRadius: "8px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
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
    </div>
  );
};

export default StatisticsPage;
