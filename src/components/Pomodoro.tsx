import React, { useState, useEffect } from "react";
import background from "./img/vlt-bg.png";
import Timer from "./Timer";
import PlayButton from "./PlayButton";
import ResetButton from "./RestartButton";
import YouTube from "react-youtube";
import FullscreenButton from "./FullscreenButton";

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
          {timerState.isBreak ? "Pomodoro" : "Take a Break"}
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
            position: "absolute",
            top: "20px",
            right: "20px",
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

        {/* YouTube Video as Background Music */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "none", // Hide the video player
          }}
        >
          <YouTube
            videoId="_adXZhMCyVE" // Replace with your video ID
            opts={{
              height: "100%",
              width: "100%",
              playerVars: {
                autoplay: 1,
                controls: 0, // Hide controls
                modestbranding: 1,
                loop: 1,
                playlist: "_adXZhMCyVE", // Loop the video
                mute: timerState.isMuted ? 1 : 0, // Mute or unmute based on state
              },
            }}
            onReady={onPlayerReady}
          />
        </div>
      </div>
      {/* Fullscreen Button */}
      <FullscreenButton
        onClick={toggleFullscreen}
        isFullscreen={isFullscreen}
      />
    </div>
  );
};

export default Pomodoro;
