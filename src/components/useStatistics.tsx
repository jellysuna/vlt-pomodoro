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

  // Save stats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STATISTICS_KEY, JSON.stringify(stats));
  }, [stats]);

  // Function to add a completed Pomodoro session and update total time
  const addPomodoroSession = (duration: number) => {
    setStats((prev) => ({
      ...prev,
      completedPomodoros: prev.completedPomodoros + 1,
      totalPomodoroTime: prev.totalPomodoroTime + duration,
    }));
  };

  // Function to add a completed break session and update total break time
  const addBreakSession = (duration: number) => {
    setStats((prev) => ({
      ...prev,
      completedBreaks: prev.completedBreaks + 1,
      totalBreakTime: prev.totalBreakTime + duration,
    }));
  };

  // Function to reset all statistics to zero
  const resetStatistics = () => {
    setStats({
      completedPomodoros: 0,
      totalPomodoroTime: 0,
      completedBreaks: 0,
      totalBreakTime: 0,
    });
  };

  return { stats, addPomodoroSession, addBreakSession, resetStatistics };
};

export default useStatistics;
