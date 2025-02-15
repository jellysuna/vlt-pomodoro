import React, { useState, useEffect } from "react";
import background from "./img/vlt-bg.png";
import Timer from "./Timer";
import PlayButton from "./PlayButton";
import ResetButton from "./RestartButton";
import YouTube from "react-youtube";
import FullscreenButton from "./FullscreenButton";
import { Link } from "react-router-dom";

const Pomodoro: React.FC = () => {
  const [timerState, setTimerState] = useState({
    isRunning: false,
    isBreak: false,
    isMuted: true,
  });
  const [time, setTime] = useState(25 * 60); // Start with 25 minutes (Pomodoro)
  const [player, setPlayer] = useState<any>(null); // Store YouTube player reference
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (player && !timerState.isMuted) {
      player.playVideo();
    }
  }, [player, timerState.isMuted]);

  useEffect(() => {
    if (time === 0) {
      recordSession(timerState.isBreak, timerState.isBreak ? 5 * 60 : 25 * 60);
    }
  }, [time]);

  const handlePlayPause = () => {
    setTimerState((prev) => ({
      ...prev,
      isRunning: !prev.isRunning, // Toggle timer state
    }));
  };

  const handleReset = () => {
    setTimerState((prev) => ({
      ...prev,
      isRunning: false, // Stop timer
    }));
    setTime(timerState.isBreak ? 5 * 60 : 25 * 60); // Reset to either 5 or 25 minutes based on mode
  };

  const handleSwitchMode = () => {
    setTimerState((prev) => ({
      ...prev,
      isRunning: false, // Stop the timer when switching mode
      isBreak: !prev.isBreak, // Toggle between Pomodoro and break mode
    }));
    setTime(timerState.isBreak ? 25 * 60 : 5 * 60); // Change the time based on mode
  };

  const recordSession = (isBreak: boolean, duration: number) => {
    const key = isBreak ? "breakStats" : "pomodoroStats";
    const storedData = localStorage.getItem(key);
    let stats = storedData ? JSON.parse(storedData) : { time: 0, cycles: 0 };

    const elapsed = isBreak ? 5 * 60 - time : 25 * 60 - time; // Capture actual time spent
    stats.time += elapsed;
    stats.cycles += 1;
    localStorage.setItem(key, JSON.stringify(stats));
  };

  // YouTube Player onReady callback to control playback
  const onPlayerReady = (event: any) => {
    event.target.setVolume(100);
    event.target.playVideo(); // Start playing the video
    setPlayer(event.target); // Save the player reference
  };

  // Toggle mute state for music
  const toggleMusic = () => {
    if (player) {
      if (timerState.isMuted) {
        player.unMute(); // Unmute video
      } else {
        player.mute(); // Mute video
      }
      setTimerState((prev) => ({
        ...prev,
        isMuted: !prev.isMuted, // Toggle mute state
      }));
    }
  };

  // Fullscreen toggle function
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullscreen(true));
    } else if (document.exitFullscreen) {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        color: "#4E4037",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative", // Add relative positioning
        }}
      >
        {/* "Take a Break" Button */}
        <button
          onClick={handleSwitchMode}
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "50px",
            background: "transparent",
            border: "3px solid #4E4037",
            borderRadius: "13px",
            color: "#4E4037",
            cursor: "pointer",
            letterSpacing: "2px",
          }}
        >
          {timerState.isBreak ? "Pomodoro" : "take a break"}
        </button>

        {/* Timer */}
        <Timer isRunning={timerState.isRunning} time={time} setTime={setTime} />

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "50px",
          }}
        >
          <PlayButton
            isRunning={timerState.isRunning}
            onClick={handlePlayPause}
          />
          <ResetButton onClick={handleReset} />
        </div>

        {/* Music Icon (Toggle Video Play/Pause) */}
        <div
          onClick={toggleMusic}
          style={{
            position: "relative",
            top: "-270px",
            marginLeft: "215px",
            cursor: "pointer",
            fontSize: "36px", // Icon size
            color: "#4E4037",
          }}
        >
          {timerState.isMuted ? (
            // silent icon (bgm mute)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-volume-mute"
              viewBox="0 0 16 16"
            >
              <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0" />
            </svg>
          ) : (
            // music icon (bgm play)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-music-note"
              viewBox="0 0 16 16"
            >
              <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2" />
              <path fill-rule="evenodd" d="M9 3v10H8V3z" />
              <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z" />
            </svg>
          )}
        </div>

        <YouTube
          videoId="_adXZhMCyVE"
          opts={{
            height: "100%",
            width: "100%",
            playerVars: {
              autoplay: 1,
              controls: 0,
              modestbranding: 1,
              loop: 1,
              playlist: "_adXZhMCyVE",
              mute: timerState.isMuted ? 1 : 0,
            },
          }}
          onReady={onPlayerReady}
          style={{ display: "none" }}
        />
      </div>
      <FullscreenButton onClick={toggleFullscreen} />

      {/* View Statistics Button */}
      <Link to="/statistics">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          style={{
            cursor: "pointer",
            color: "#4E4037",
            position: "absolute",
            bottom: "20px",
            right: "50px",
          }}
          viewBox="0 0 16 16"
        >
          <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
        </svg>
      </Link>
    </div>
  );
};

export default Pomodoro;
