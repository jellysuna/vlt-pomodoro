const ClearStatisticsButton: React.FC = () => {
  const handleClearStats = () => {
    // Clear statistics from localStorage
    localStorage.removeItem("pomodoroSessions");
    localStorage.removeItem("breakSessions");
    localStorage.removeItem("totalPomodoroTime");
    localStorage.removeItem("totalBreakTime");

    // Optionally, reset stats in state or display a message to the user
    alert("Statistics cleared!");
  };

  return (
    <button
      onClick={handleClearStats}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#f44336",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Clear Statistics
    </button>
  );
};

export default ClearStatisticsButton;
