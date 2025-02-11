import { useState, useEffect } from "react";

interface Statistics {
  completedPomodoros: number;
  totalPomodoroTime: number; //in secs
  completedBreaks: number;
  totalBreakTime: number; //in secs
}

const STATISTICS_KEY = "PomodoroStatistics"; //key for localstorage

const useStatistics = () => {
  // Load statistics from localStorage or initialize with default values
  const [stats, setStats] = useState<Statistics>(() => {
    const savedStats = localStorage.getItem(STATISTICS_KEY);
    return savedStats
      ? JSON.parse(savedStats) // Parse stored JSON if available
      : {
          completedPomodoros: 0,
          totalPomodoroTime: 0,
          completedBreaks: 0,
          totalBreakTime: 0,
        };
  });
};
