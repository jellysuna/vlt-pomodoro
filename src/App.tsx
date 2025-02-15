import { useState } from "react";
import Pomodoro from "./components/Pomodoro";
import StatisticsPage from "./components/StatisticsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pomodoro />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </Router>
  );
};
export default App;
