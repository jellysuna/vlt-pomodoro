import { useState, useEffect } from "react";

interface Statistics {
  completedPomodoros: number;
  totalPomodoroTime: number; // in seconds
  completedBreaks: number;
  totalBreakTime: number; // in seconds
  completedCycles: number;
}

const useStatistics = () => {
  const [stats, setStats] = useState<Statistics>({
    completedPomodoros: 0,
    totalPomodoroTime: 0,
    completedBreaks: 0,
    totalBreakTime: 0,
    completedCycles: 0,
  });

  // Load stats from localStorage on first render
  useEffect(() => {
    const savedStats = localStorage.getItem("pomodoroStats");
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  // Save stats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("pomodoroStats", JSON.stringify(stats));
  }, [stats]);

  // Function to add a completed Pomodoro session
  const addPomodoroSession = (duration: number) => {
    setStats((prevStats) => {
      const newPomodoroCount = prevStats.completedPomodoros + 1;
      const newPomodoroTime = prevStats.totalPomodoroTime + duration;

      return {
        ...prevStats,
        completedPomodoros: newPomodoroCount,
        totalPomodoroTime: newPomodoroTime,
        completedCycles:
          newPomodoroCount % 4 === 0
            ? prevStats.completedCycles + 1
            : prevStats.completedCycles, // Increase cycle every 4 Pomodoros
      };
    });
  };

  // Function to add a completed Break session
  const addBreakSession = (duration: number) => {
    setStats((prevStats) => ({
      ...prevStats,
      completedBreaks: prevStats.completedBreaks + 1,
      totalBreakTime: prevStats.totalBreakTime + duration,
    }));
  };

  return {
    stats,
    addPomodoroSession,
    addBreakSession,
  };
};

export default useStatistics;
