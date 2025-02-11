import React from "react";
import useStatistics from "./useStatistics"; //import custom hook
import { Link } from "react-router-dom";

const StatisticsPage: React.FC = () => {
  const { stats } = useStatistics(); // Get stats from the hook

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Statistics</h1>
      <div>
        <h2>Pomodoro Sessions</h2>
        <p>Completed Pomodoros: {stats.completedPomodoros}</p>
        <p>
          Total Pomodoro Time: {Math.floor(stats.totalPomodoroTime / 60)}{" "}
          minutes
        </p>
      </div>
      <div>
        <h2>Break Sessions</h2>
        <p>Completed Breaks: {stats.completedBreaks}</p>
        <p>Total Break Time: {Math.floor(stats.totalBreakTime / 60)} minutes</p>
      </div>
    </div>
  );
};

export default StatisticsPage;
