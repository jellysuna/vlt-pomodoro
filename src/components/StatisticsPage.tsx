import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">📊 Your Pomodoro Stats</h1>

      <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-lg">
        {/* Pomodoro Stats */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">🍅 Pomodoro</h2>
          <p className="text-2xl font-bold">{formatTime(pomodoroStats.time)}</p>
          <p className="text-lg">Completed: {pomodoroStats.cycles}</p>
        </div>

        {/* Break Stats */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">☕ Break</h2>
          <p className="text-2xl font-bold">{formatTime(breakStats.time)}</p>
          <p className="text-lg">Completed: {breakStats.cycles}</p>
        </div>
      </div>

      {/* Back Button */}
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
      >
        ⬅ Back to Timer
      </Link>
    </div>
  );
};

export default StatisticsPage;
